import "./App.css";

import {config} from "./config.js";

function call_api() {
    const tweets = ["walking to the park", "finding the store", "and this and that", "what about this", "finally we will see"];
    console.log("https://" + config.api_port + "-" + config.api_url + "/" + config.api_endpoint + "?Sequences=" + tweets.join("&Sequences="));
    fetch("https://" + config.api_port + "-" + config.api_url + "/" + config.api_endpoint + "?Sequences=" + tweets.join("&Sequences=")) //.join(","))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    })
}

function App() {

  return (
    <div className="App">
      <button onClick={(event) => {call_api()}}>CLICK</button>
    </div>
  );
}

export default App;