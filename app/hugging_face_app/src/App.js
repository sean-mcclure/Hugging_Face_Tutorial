import "./App.css";

import {events} from "./events.js";

import {
  FaArrowRight
} from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <button onClick={(event) => {events.call_api()}}>CLICK</button>
      <div className="wrapper">
        <div className="item"><textarea></textarea></div>
        <div className="item"><FaArrowRight className="icon"/></div>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default App;