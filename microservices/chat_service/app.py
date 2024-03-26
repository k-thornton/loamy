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
    """ Pydantic model """
    user_input: str
    user_id: str


# Initialize Pinecone
index_name = "loamy"
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(index_name)

embed_model = "text-embedding-3-large"
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
    # This is just to prevent someone from spamming the OpenAI endpoint and racking up a huge bill.
    return JSONResponse(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        content={"detail": "Too many requests, please try again in a minute."},
    )


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
    # Construct the contexts
    contexts = []
    for idx, item in enumerate(sorted_items):
        metadata = item.get("metadata")
        if metadata:
            context = metadata.get("text")
            if context and metadata.get("source"):
                context += f"\nLearn more: {metadata.get("source")}"
            contexts.append(context)

    # Construct the augmented query string with contexts, chat history, and user input
    augmented_query = (
        "CONTEXT: "
        + "\n\n"
        + "\n\n".join(contexts)
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

    try:
        retrieve(user_input, user_id)

        # Start Retrieval
        augmented_query = retrieve(user_input, user_id)
        print(augmented_query)
        res = client.chat.completions.create(
            temperature=0.0,
            model=conversation_model,
            messages=[
                {"role": "system", "content": primer},
                {"role": "user", "content": augmented_query},
            ],
        )
        response = res.choices[0].message.content

        return {"output": response}

    except ValueError as e:
        print(e)
        raise HTTPException(status_code=400, detail="Invalid input")

# Local start command: uvicorn app:app --reload --port 8800