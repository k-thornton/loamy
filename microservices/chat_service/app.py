import os
from dotenv import main
from pinecone import Pinecone
from openai import OpenAI
from fastapi import FastAPI, Request, HTTPException, status, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel, TypeAdapter
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from starlette.status import HTTP_429_TOO_MANY_REQUESTS
import tiktoken
import time

main.load_dotenv()
client = OpenAI()

#########Initialize backend API keys ######

PINECONE_API_KEY = os.environ["PINECONE_API_KEY"]


class Query(BaseModel):
    user_input: str
    user_id: str


# Initialize Pinecone
index_name = "loamy"
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(index_name)

# embed_model = "text-embedding-ada-002"
embed_model = "text-embedding-3-small"
conversation_model = "gpt-3.5-turbo-0613"
score_threshold = 0.3

with open("system_prompt.txt", "r") as sys_file:
    primer = sys_file.read()


# #####################################################
tokenizer = tiktoken.get_encoding("cl100k_base")


# create the length function
def tiktoken_len(text):
    tokens = tokenizer.encode(text, disallowed_special=())
    return len(tokens)


def get_user_id(request: Request):
    try:
        body = TypeAdapter(Query).validate_python(request.json())
        user_id = body.user_id
        return user_id
    except Exception as e:
        return get_remote_address(request)


# Define FastAPI app
app = FastAPI()

# Define limiter
limiter = Limiter(key_func=get_user_id)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)


@app.exception_handler(RateLimitExceeded)
async def custom_rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        content={"detail": "Too many requests, please try again in a minute."},
    )


# Initialize user state
# TODO: move this off into s3 or something
user_states = {}


# Define Retrieval
def retrieve(user_input, user_id):
    res_embed = client.embeddings.create(input=[user_input], model=embed_model)
    xq = res_embed.data[0].embedding
    res_query = index.query(vector=xq, top_k=2, include_metadata=True)
    # Filter items with score > score_threshold and sort them by score
    sorted_items = sorted(
        [item for item in res_query["matches"] if item["score"] > score_threshold],
        key=lambda x: x["score"],
        reverse=True,
    )
    print(res_query)
    # Construct the contexts
    contexts = []
    for idx, item in enumerate(sorted_items):
        context = item["metadata"]["text"]
        context += "\nLearn more: " + item["metadata"].get("source", "N/A")
        contexts.append(context)

    # Retrieve and format previous conversation history for a specific user_id
    print(contexts)
    last_conversation = (
        user_states[user_id].get("previous_queries", [])[-1]
        if user_states[user_id].get("previous_queries", [])
        else None
    )
    previous_conversation = (
        f"User: {last_conversation[0]}\nAssistant: {last_conversation[1]}"
        if last_conversation
        else ""
    )

    # Construct the augmented query string with contexts, chat history, and user input
    augmented_query = (
        "CONTEXT: "
        + "\n\n"
        + "\n\n".join(contexts)
        + "\n\n-----\n\n"
        + "CHAT HISTORY: \n"
        + previous_conversation
        + "\n\n-----\n\n"
        + "User: "
        + user_input
        + "\n"
        + "Assistant: "
    )

    return augmented_query


# Define FastAPI endpoints
@app.get("/")
async def root():
    return {"welcome": "You've reached the home route!"}


@app.post("/chat")
@limiter.limit("100/minute")
async def react_description(query: Query, request: Request):
    user_id = query.user_id
    user_input = query.user_input.strip()

    if user_id not in user_states:
        user_states[user_id] = {"previous_queries": [], "timestamp": time.time()}

        try:
            retrieve(user_input, user_id)

            # Start Retrieval
            augmented_query = retrieve(user_input, user_id)
            print(augmented_query)
            res = client.chat.completions.create(
                temperature=0.0,
                # model='gpt-4',
                model=conversation_model,
                messages=[
                    {"role": "system", "content": primer},
                    {"role": "user", "content": augmented_query},
                ],
            )
            response = res.choices[0].message.content

            # Save the response to a thread
            user_states[user_id] = {
                "previous_queries": user_states[user_id].get("previous_queries", [])
                + [(user_input, response)],
                "timestamp": time.time(),
            }
            return {"output": response}

        except ValueError as e:
            print(e)
            raise HTTPException(status_code=400, detail="Invalid input")


# Local start command: uvicorn app:app --reload --port 8800
