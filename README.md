# Memories
Share memories with your loved ones 📷🤗🖼💌


![Landing Page](/doc/mockup/Memories.jpg)

## About
* Developed for deployment on heroku.  
* Based on the Heroku NodeJS Getting Started Template https://github.com/heroku/node-js-getting-started.git.  

## Installation Hints
* App cnnects to the Heroku PostgreSQL Database through the provided values in the environment variable `DATABASE_URL`
* Run the SQL statement provided in `backend/database/create_tables.sql` to create mandatory tables in your Postgres DB
* Deploy App

## Technical facts
* Frontend: Angular 🅰
* Backend: NodeJS with Express
* Database: PostgreSQL 🐘

## REST API
**Create new image**
<pre>
POST {hostname}/api/v1/card
{
  "image_data": "base64-encoded-image-string",
  "date": "YYYY-MM-DD",
  "secret": "yourSecretString"
}
</pre>
