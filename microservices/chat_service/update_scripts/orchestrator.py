import shutil
import os
from config import CONFIG
from scraper import run_scraper
from chunker import run_chunker
from updater import run_updater
from index_booter import manage_index

if __name__ == "__main__":
    manage_index(index_name='loamy')
    output_directory = CONFIG['OUTPUT_DIRECTORY']
    os.makedirs(f"{output_directory}/scraped_articles", exist_ok=True)
    # Run the pipeline steps
    run_scraper(output_directory=f"{output_directory}/scraped_articles")
    chunked_file_path = run_chunker(input_directory_path=f"{output_directory}/scraped_articles", 
                                    output_file_path=f"{output_directory}/chunked_output.json")
    run_updater(json_file_path=chunked_file_path, index_name='loamy')
    
    print('Pipeline complete!')
