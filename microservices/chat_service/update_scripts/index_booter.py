from pinecone import Pinecone, ServerlessSpec
from config import CONFIG


def manage_index(index_name="loamy", dimension=1536, metric="cosine"):
    """Ensures the Pinecone index is correctly set up."""
    pc = Pinecone(api_key=CONFIG["PINECONE_API_KEY"])
    indexes = pc.list_indexes().index_list
    if any(index['name'] == index_name for index in indexes['indexes']):
        index = pc.Index(index_name)
    else:
        index = pc.create_index(
            index_name,
            dimension,
            spec=ServerlessSpec(cloud="aws", region="us-west-2"),
            metric=metric,
        )

    return index


if __name__ == "__main__":
    manage_index()
