import "./App.css";

import BarChart from "./BarChart.js";

import {events} from "./events.js";

import {
  FaArrowRight
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <p className="title">TWEET TOPIC ANALYZER</p>
      <p className="subtitle">Paste your tweets on the left, then click arrow.</p>
      <div className="wrapper">
        <div className="item"><textarea id="pasted_tweets"></textarea></div>
        <div className="item"><FaArrowRight className="icon" onClick={(event) => {
              events.call_api();
        }}/></div>
        <div className="item"><div class="hold_plot">
           <BarChart/>
        </div></div>
      </div>
    </div>
  );
}

export default App;