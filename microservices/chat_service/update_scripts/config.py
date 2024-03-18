import os
from dotenv import load_dotenv

BASEDIR = os.path.abspath(os.path.dirname(__file__))
dotenv_path = os.path.join(BASEDIR, '..', '.env')
urls_path = os.path.join(BASEDIR, 'url.txt')
load_dotenv(dotenv_path)

# Configuration settings
CONFIG = {
    "PINECONE_API_KEY": os.getenv("PINECONE_API_KEY"),
    "OPENAI_API_KEY": os.getenv("OPENAI_API_KEY"),
    "OUTPUT_DIRECTORY": os.path.abspath("output_files"),
    "ARTICLE_URLS":  [line.strip() for line in open(urls_path, 'r')]
}
