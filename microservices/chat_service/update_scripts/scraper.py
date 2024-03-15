import requests
import json
import os
from datetime import datetime
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from config import CONFIG  # Assuming CONFIG contains all necessary configurations

def clean_and_extract_text(html_content):
    """Extracts clean text from HTML content."""
    soup = BeautifulSoup(html_content, 'html.parser')
    for script_or_style in soup(["script", "style"]):
        script_or_style.decompose()
    return ' '.join(soup.stripped_strings)

def save_article_content(article_url, output_folder):
    """Fetches an article's content, cleans it, and saves it as JSON if not already saved."""
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }

    parsed_url = urlparse(article_url)
    filename = f"{parsed_url.netloc}_{parsed_url.path}.json".replace('/', '_')[:200]  # Limiting filename length
    output_path = os.path.join(output_folder, filename)

    # Check if the file already exists to avoid re-scraping
    if os.path.exists(output_path):
        print(f"Skipping {article_url}, already saved.")
        return

    try:
        response = requests.get(article_url, headers=headers)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching {article_url}: {e}")
        return

    text = clean_and_extract_text(response.content)
    data = {
        'metadata': {
            'source': article_url,
            'source-type': 'publication',
            'scraped-at': datetime.now().isoformat()
        },
        'content': text
    }

    with open(output_path, 'w+', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Saved: {output_path}")

def run_scraper(output_directory=CONFIG['OUTPUT_DIRECTORY']):
    """Runs the web scraping process."""
    url_list = CONFIG.get('ARTICLE_URLS', [])
    for url in url_list:
        if url.endswith('.pdf') or url.startswith('#'):
            print(f"Ignoring and skipping {url}")
            continue
        save_article_content(url, output_directory)

if __name__ == "__main__":
    run_scraper()
