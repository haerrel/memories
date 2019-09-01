# Memories
Share memories with your loved ones 📷🤗🖼💌

## About
This app was developed for deployment on heroku.  
Therefore this App is based on the Heroku NodeJS Getting Started Repo https://github.com/heroku/node-js-getting-started.git.  
It connects to the Heroku PostgreSQL Database through the provided values in the environment variable `DATABASE_URL`  


## Technical facts
* Frontend: Angular 🅰
* Backend: NodeJS with Express
* Database: PostgreSQL 🐘

## REST API
**Create new image**
`
POST {hostname}/api/v1/card
{
  "image_data": "base64-encoded-image-string",
  "date": "YYYY-MM-DD",
  "secret": "yourSecretString"
}
`
