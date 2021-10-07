import "./App.css";
/*import BarChart from "./BarChart.js";*/

import {events} from "./events.js";

import {
  FaArrowRight
} from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <h2>Paste your tweets on the left, then click arrow.</h2>
      <div className="wrapper">
        <div className="item"><textarea></textarea></div>
        <div className="item"><FaArrowRight className="icon" onClick={(event) => {events.call_api()}}/></div>
        <div className="item"><div className="hold_plots"></div></div>
      </div>
    </div>
  );
}

export default App;