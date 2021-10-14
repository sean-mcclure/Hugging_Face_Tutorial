import {
  config
} from "./config.js";

export const events = {
  call_api: function() {
      const tweets = events.read_tweets();
      console.log(tweets)
     // const tweets = ["I am angry about the pizza", "I am happy about the pizza", "let's have some dinner together"];
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
      return (tweets)
  },
  array_occurences: function(arr) {
      const counts = {};
      for(const num of arr) {
          counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      events.draw_plot(counts);
  },
  draw_plot : function(counts) {
      document.getElementById("bar_1").style.height = counts["anger"] + "%";
      document.getElementById("bar_2").style.height = counts["joy"] + "%";
      document.getElementById("bar_3").style.height = counts["optimism"] + "%";
      document.getElementById("bar_4").style.height = counts["sadness"] + "%";
  }
}