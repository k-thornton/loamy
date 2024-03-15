import json
import os
from tqdm import tqdm
from config import CONFIG  # Assuming CONFIG contains all necessary configurations
from pinecone import Pinecone
from openai import OpenAI

client = OpenAI()

def load_documents(json_file_path):
    with open(json_file_path, "r", encoding="utf-8") as f:
        return json.load(f)

def check_existing_documents(index, document_ids):
    """Checks which documents already exist in the Pinecone index."""
    existing_docs = index.fetch(ids=document_ids)['vectors']
    existing_ids = {doc_id for doc_id in existing_docs.keys()}
    return existing_ids

def upsert_documents(documents, index):
    """Upserts documents to Pinecone index in batches, checking for existing embeddings first."""
    embed_model = 'text-embedding-3-small'
    batch_size = 100

    for start in tqdm(range(0, len(documents), batch_size), desc="Checking and Upserting Batches"):
        batch = documents[start:start+batch_size]
        batch_ids = [doc['id'] for doc in batch]
        
        # Check which documents already exist in the index
        existing_ids = check_existing_documents(index, batch_ids)
        
        # Filter out documents that already exist
        new_docs = [doc for doc in batch if doc['id'] not in existing_ids]
        if not new_docs:  # Skip this batch if all docs already exist
            continue
        
        # Generate embeddings for new documents
        texts = [doc['text'].replace("\n", " ") for doc in new_docs]
        embeddings = client.embeddings.create(input=texts, model=embed_model).data
        
        batch_upsert = [{'id': doc['id'], 'values': emb.embedding, 'metadata': doc['metadata']} 
                        for doc, emb in zip(new_docs, embeddings)]
        index.upsert(vectors=batch_upsert)

def run_updater(json_file_path, index_name='loamy'):
    pc = Pinecone(api_key=CONFIG["PINECONE_API_KEY"])
    index = pc.Index(index_name)
    documents = load_documents(json_file_path)

    upsert_documents(documents, index)
    print("Index update completed.")

if __name__ == "__main__":
    output_json_path = os.path.join(CONFIG['OUTPUT_DIRECTORY'], 'chunked_output.json')  # Default path
    run_updater(output_json_path)
