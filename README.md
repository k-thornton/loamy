# Project Setup Guide

## Initial Setup

### Environment Variables

1. Copy `.env_example` in-place and rename the copy to `.env`.

### Create Your Accounts

- **OpenAI Account**:

  - Create an account at [openai.com](https://openai.com).
  - Generate an API key at [OpenAI API keys](https://platform.openai.com/api-keys).
  - Add the API key to your `.env` file: `OPENAI_API_KEY={yourkeygoeshere}`.

- **Pinecone Account**:

  - Sign up at [pinecone.io](https://pinecone.io).
  - Create an organization and project, choosing "serverless" for the project type if prompted.
  - Generate an API key for your project and add it to your `.env` here -> `PINECONE_API_KEY=yourkeygoeshere`.
  - Note: you'll run `orchestrator.py` to create your database and fill it with data later on.

- **Google Cloud**:

  - If not already set up, create a Google Cloud organization at [Google Cloud Console](https://console.cloud.google.com/).
  - Follow [this guide](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid) to obtain your Google API Client ID.
  - Add your Client ID to your `.env` here -> `REACT_APP_GOOGLE_CLIENT_ID=clientidgoeshere`.
  - Create a new OAuth client ID credential at [Google Cloud Credentials](https://console.cloud.google.com/apis/credentials).
  - In the OAuth credential config, under "authorized javascript origins", add `https://loamy.info` or `https://demo.loamy.info` (or wherever this ends up hosted), and optionally `http://localhost:3000` for local testing.

- **MongoDB Atlas**:
  - Register at [MongoDB Atlas](https://account.mongodb.com/account/login).
  - Create a project and within it, a new cluster. The "shared" cluster type is free and will likely be fine until you scale up.
  - Obtain your cluster's Connection String, add it to your `.env` here -> `MONGODB_URI=connectionstringgoeshere`.

- **Heroku**:
  - Create a Heroku account [here](https://heroku.com).
  - We will use this account in the next step to deploy and host the site.

### Heroku Setup

- Install the Heroku CLI using the [official guide](https://devcenter.heroku.com/articles/heroku-cli).
- From your project's root directory, run these commands:

  ```bash
  heroku login
  heroku create loamy
  heroku buildpacks:add --index 1 heroku/nodejs --app loamy
  heroku buildpacks:add --index 2 heroku/python --app loamy
  cat .env | xargs heroku config:set --app loamy
  heroku certs:auto:enable --app loamy
  heroku addons:create quotaguardstatic:starter -a loamy
  git push heroku
  ```

## DNS Hosting

### If you want to redirect all traffic from `loamy.info` to this new service:

- Run `heroku domains:add loamy.info --app loamy`.
- On the Heroku online dashboard: go to your Heroku app settings under "domains" and grab the DNS Target string.
- Go to your domain provider and configure the domain's DNS settings to create an `ALIAS` record with your Heroku DNS target.

### If you want to redirect a subdomain (i.e. `demo.loamy.info`) to the new address:

- Run `heroku domains:add demo.loamy.info --app loamy`.
- On the Heroku online dashboard: go to your Heroku app settings under "domains" and grab the DNS Target string.
- Go to your domain provider and configure a `CNAME` record for `yoursubdomainchoice` (i.e. `demo`) pointing at the Heroku DNS target.

## MongoDB Atlas Allowlisting

- Because you ran create quotaguardstatic earlier, you should have received an email from QuotaGuard Static with some static IPs.
- Go to MongoDB Atlas, under "Network Access" on the left, and add those static IPs to the access list.

## Whenever You Update the App

- Run `git push heroku` to push your changes to the production app.

## Get Set up to Run Locally

- Ensure Node.js is [installed](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- Ensure Python3 is [installed](https://www.python.org/downloads/)
- From the project root folder, run `npm run build-frontend && npm run build-server`
- Set up a Python virtualenv and install dependencies:
  ```bash
  python3 -m venv .venv/
  source .venv/bin/activate
  pip install -r requirements.txt
  ```
- Install Visual Studio Code if you don't have it already.
- Open the root project folder in VS Code.
- In VSCode, use the "run and debug" feature to launch "launch full stack".
- Open your browser to `http://localhost:3000`. The site should be running there.

## Push data to the chatbot's data set (you have to do this at least once!)
- You can add new urls into the url.txt file (if you'd like), and run `orchestrator.py` in order to scrape the content from those URLs and push them into the Pinecone database for later retrieval.
- Be careful not to add any links to binary files to `url.txt` (like PDFs or spreadsheets).  The scraper isn't smart enough to know to avoid these, and they end up messing things up.
- The `orchestrator.py` script needs to be run at least once after setting up your Pinecone account in order for the chatbot to have any data to retrieve.

# General Project Overview

This application is broken down into four main parts: the frontend React app, the backend Node.js Express server, and two Python microservices (chat service and calculation service).

### Frontend

- Built using the React framework, which powers the client-side of the web application.
- Main pages are located in `frontend/src/pages`, with `Home.js` as the landing page and `WomenLikeMe.js` driving the app's main functionality.
- Components used across the application are in the `frontend/src/components` directory.
  For example, anytime I want one of those pretty purple Callout boxes, I use the Callout/ component.  This way I can change the Callout.js file once, and all usages of that component will update along with it.

### Backend

- A Node.js Express application located in the `server/` directory.
- Manages API endpoints like authentication (`/api/auth`), survey processing (`/api/survey`), and chat (`/api/chat`).
- Modify `server/routes/authRoutes.js`, `server/routes/surveyRoutes.js`, and `server/routes/chatRoutes.js` to view or adjust the endpoint logic.
- If you ever want to update the questions in your survey, there's a file `server/scripts/questions.json` containing the list of questions.  If you ever modify this, rerun `loadQuestions.js` (by running `node loadQuestions.js`) in order to push the new questions to the database.

### Microservices

#### Chat Service

- Located under `microservices/chat_service`.
- The chat_service microservice communicates with Pinecone and OpenAI in order to create a rudimentary RAG-style chatbot.
- The `microservices/chat_service/update_scripts` directory contains scripts for updating the bot's knowledge set from specified URLs.
- You can add new urls into the url.txt file, and run `orchestrator.py` in order to scrape the content from those URLs and push them into the Pinecone database for later retrieval.
- Be careful not to add any binary files to `url.txt` (like PDFs or spreadsheets).  The scraper isn't smart enough to know to avoid these, and they end up messing things up.

#### Calculation Service

- Found in `microservices/calc_service`.
- Packages existing Python code for integration into the application.
- The `load_data` and `filter_dataframe` methods are essentially untouched, and it contains a service endpoint called `calculate` that uses those 2 methods to get the data it needs and then returns it.
