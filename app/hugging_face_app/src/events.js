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
    },
    read_tweets: function() {
      var tweets = document.getElementById("textarea").value;
      tweets = tweets.split("\n");
      return (tweets)
    },
    draw_bar_chart : function() {
      /*
      var trace1 = {
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      };
      var data = [trace1];
      var layout = { 
        title: 'Responsive to window\'s size!',
        font: {size: 18}
      };
      var config = {responsive: true}
      Plotly.newPlot("hold_plot", data, layout, config );
      */
    }
}