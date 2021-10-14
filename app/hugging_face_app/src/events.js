//https://www.allmytweets.net/
import {
  config
} from "./config.js";

export const events = {
  call_api: function() {
      const tweets = events.read_tweets();
      fetch("https://" + config.api_port + "-" + config.api_url + "/" + config.api_endpoint + "?Sequences=" + encodeURI(tweets.join("&Sequences=")))
      .then(response => response.json())
      .then(data => events.array_occurences(data.Predictions))
      .catch((error) => {
          console.error('Error:', error);
      })
  },
  read_tweets: function() {
      var tweets = document.getElementById("pasted_tweets").value;
      tweets = tweets.split("\n");
      tweets = events.clean_tweets(tweets)
      return (tweets)
  },
  clean_tweets : function(tweets) {
       var res = [];  
        tweets.forEach(function(tweet) {
            res.push(tweet.replace(/[^\w\s]/gi, ''));
        })
      return(res)
  },
  array_occurences: function(arr) {
      const counts = {};
      for(const num of arr) {
          counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      events.draw_plot(counts);
  },
  draw_plot : function(counts) {
      const total = Object.values(counts).reduce((a, b) => a + b);
      document.getElementById("bar_1").style.height = (counts["anger"]/total)*100 + "%";
      document.getElementById("bar_2").style.height = (counts["joy"]/total)*100 + "%";
      document.getElementById("bar_3").style.height = (counts["optimism"]/total)*100 + "%";
      document.getElementById("bar_4").style.height = (counts["sadness"]/total)*100 + "%";
  }
}