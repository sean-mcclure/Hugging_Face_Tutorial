## Clone Project
#### Clone the project:
`git clone https://github.com/sean-mcclure/Hugging_Face_Tutorial.git`

## Install Dependencies and Start Web Servers
#### Run the following in terminal:
`bash start.sh`

NOTE: Make sure both ports 3000 and 5000 are publicly available (otherwise you may run into CORs issues)

## Set the `api_url`
#### In the directory `app/hugging_face_app/src/` set the root_url inside `config.js`:

```
export const config = {
    api_url : "localhost",
    api_port: 5000,
    api_endpoint : "inference"
}
```

NOTE: If you're using a different port for the Flask API, set it here. Don't put any http or backslashes in the api_url.

## Open Browser
#### Open your to localhost:5000 (or whatever api_url you're using)

## Visit AllMyTweets.net
#### Visit AllMyTweets.net to list all your tweets (enter username -> hit OK -> choose Tweets)

Copy and and paste a chunk of tweets from AllMyTweets.net into the box on the left of the application. Click the arrow. The results show the sentiment breakdown of all your pasted tweets by relative percentage.

![screenshot](https://collaboratescience.com/images/sents.png)