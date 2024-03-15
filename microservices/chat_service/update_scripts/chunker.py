import hashlib
import json
import os
from pathlib import Path
from tqdm import tqdm

def load_json_files(directory_path):
    """
    Loads all JSON files from the specified directory and returns a list of their contents.
    """
    contents = []
    for file_name in os.listdir(directory_path):
        if file_name.lower().endswith('.json'):
            file_path = os.path.join(directory_path, file_name)
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            contents.append(data)
    return contents

def chunk_text(text, max_chunk_size=500):
    """
    Splits the text into chunks of a specified size.
    """
    words = text.split()
    chunks = [' '.join(words[i:i + max_chunk_size]) for i in range(0, len(words), max_chunk_size)]
    return chunks

def generate_chunk_id(url, index):
    """
    Generates a unique chunk ID based on the content URL and chunk index.
    """
    md5 = hashlib.md5(url.encode('utf-8'))
    return f"{md5.hexdigest()}_{index}"

def run_chunker(input_directory_path, output_file_path, max_chunk_size=500):
    contents = load_json_files(input_directory_path)
    chunked_contents = []

    for content in tqdm(contents):
        url = content['metadata']['source']
        text_chunks = chunk_text(content['content'], max_chunk_size=max_chunk_size)
        for i, chunk in enumerate(text_chunks):
            chunk_id = generate_chunk_id(url, i)
            chunked_contents.append({
                'id': chunk_id,
                'metadata': content['metadata'],
                'text': chunk
            })

    with open(output_file_path, 'w', encoding='utf-8') as f:
        json.dump(chunked_contents, f, ensure_ascii=False, indent=4)

    print(f"Chunking complete. Output saved to {output_file_path}")
    return output_file_path

if __name__ == "__main__":
    # Define input and output paths
    current_directory = Path(__file__).resolve().parent
    output_files_dir = current_directory / '..' / '..' / '..' / 'output_files'
    input_directory = output_files_dir / 'scraped_articles'  # Adjust as necessary
    output_file = output_files_dir / 'chunked_output.json'  # Adjust as necessary

    run_chunker(input_directory, output_file, max_chunk_size=300)
