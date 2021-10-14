import "./App.css";

import BarChart from "./BarChart.js";

import {events} from "./events.js";

import {
  FaArrowRight
} from "react-icons/fa";


const data = [
    {
      "Letter": "A",
      "Freq": 20	
    },
    {
      "Letter" : "B",
      "Freq": 12
    },
    {
      "Letter" : "C",
      "Freq": 47
    },
    {
      "Letter" : "D",
      "Freq": 34
    },
    {
      "Letter" : "A",
      "Freq" : 54
    },
    {
      "Letter" : "C",
      "Freq" : 21
    },
    {
      "Letter" : "C",
      "Freq" : 57
    },
    {
      "Letter" : "A",
      "Freq" : 31
    },
    {
      "Letter" : "B",
      "Freq" : 17
    },
    {
      "Letter" : "B",
      "Freq" : 5
    },
    {
      "Letter" : "B",
      "Freq" : 23
    },
    {
      "Letter" : "D",
      "Freq" : 39
    },
    {
      "Letter" : "D",
      "Freq" : 29
    },
    {
      "Letter" : "A",
      "Freq" : 33
    },
    {
      "Letter" : "C",
      "Freq" : 18
    },
    {
      "Letter" : "C",
      "Freq" : 35
    },
    {
      "Letter" : "C",
      "Freq" : 11
    },
    {
      "Letter" : "C",
      "Freq" : 45
    }
    ]
function App() {

  const d3_url = "./histogram/index.html"

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
        <BarChart data={data} />
          </div></div>
      </div>
    </div>
  );
}

export default App;