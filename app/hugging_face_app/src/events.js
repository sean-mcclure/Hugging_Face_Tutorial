import {config} from "./config.js";

export const events = {
    call_api : function() {
        const tweets = ["I am angry about the pizza", "I am happy about the pizza", "let's have some dinner together"];
        console.log("https://" + config.api_port + "-" + config.api_url + "/" + config.api_endpoint + "?Sequences=" + encodeURI(tweets.join("&Sequences=")));
        fetch("https://" + config.api_port + "-" + config.api_url + "/" + config.api_endpoint + "?Sequences=" + encodeURI(tweets.join("&Sequences=")))
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        })
    }
}