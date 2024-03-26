# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install any needed packages specified in requirements.txt
# Ensure your requirements.txt includes fastapi, "uvicorn[standard]", pinecone-client, openai, pydantic, dotenv, slowapi, tiktoken
RUN pip install --no-cache-dir -r requirements.txt

# Make port 7000 available to the world outside this container
EXPOSE 7000

# Command to run the uvicorn server
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7000"]
