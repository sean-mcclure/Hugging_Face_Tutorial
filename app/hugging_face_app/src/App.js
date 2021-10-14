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
      "Letter" : "E",
      "Freq" : 54
    },
    {
      "Letter" : "F",
      "Freq" : 21
    },
    {
      "Letter" : "G",
      "Freq" : 57
    },
    {
      "Letter" : "H",
      "Freq" : 31
    },
    {
      "Letter" : "I",
      "Freq" : 17
    },
    {
      "Letter" : "J",
      "Freq" : 5
    },
    {
      "Letter" : "K",
      "Freq" : 23
    },
    {
      "Letter" : "L",
      "Freq" : 39
    },
    {
      "Letter" : "M",
      "Freq" : 29
    },
    {
      "Letter" : "N",
      "Freq" : 33
    },
    {
      "Letter" : "O",
      "Freq" : 18
    },
    {
      "Letter" : "P",
      "Freq" : 35
    },
    {
      "Letter" : "Q",
      "Freq" : 11
    },
    {
      "Letter" : "R",
      "Freq" : 45
    },
    {
      "Letter" : "S",
      "Freq" : 43
    },
    {
      "Letter" : "T",
      "Freq" : 28
    },
    {
      "Letter" : "U",
      "Freq" : 26
    },
    {
      "Letter" : "V",
      "Freq" : 30
    },
    {
      "Letter" : "X",
      "Freq" : 5
    },
    {
      "Letter" : "Y",
      "Freq" : 4
    },
    {
      "Letter" : "Z",
      "Freq" : 2
    }
    ]
function App() {

  const d3_url = "./histogram/index.html"

  return (
    <div className="App">
      <p className="title">TWEET TOPIC ANALYZER</p>
      <p className="subtitle">Paste your tweets on the left, then click arrow.</p>
      <div className="wrapper">
        <div className="item"><textarea></textarea></div>
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