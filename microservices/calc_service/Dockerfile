# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
# Ensure you have Flask and pandas listed in your requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 6000 available to the world outside this container
EXPOSE 6000

# Define environment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run app.py when the container launches
CMD ["flask", "run", "--port=6000"]
