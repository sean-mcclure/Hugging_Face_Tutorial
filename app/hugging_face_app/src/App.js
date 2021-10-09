import "./App.css";

import BarChart from "./BarChart.js";

import {events} from "./events.js";

import {
  FaArrowRight
} from "react-icons/fa";


const data = [
  {year: 1980, efficiency: 14.3, sales: 999000},
  {year: 1985, efficiency: 27.6, sales: 10979000},
  {year: 1990, efficiency: 28, sales: 9303000},
  {year: 1991, efficiency: 28.4, sales: 8185000},
  {year: 1992, efficiency: 27.9, sales: 8213000},
  {year: 1993, efficiency: 8.4, sales: 8518000},
  {year: 1994, efficiency: 28.3, sales: 8991000},
  {year: 1995, efficiency: 28.6, sales: 8620000},
  {year: 1996, efficiency: 28.5, sales: 8479000},
  {year: 1997, efficiency: 28.7, sales: 8217000},
  {year: 1998, efficiency: 28.8, sales: 8085000},
  {year: 1999, efficiency: 28.3, sales: 8638000},
  {year: 2000, efficiency: 28.5, sales: 8778000},
  {year: 2001, efficiency: 28.8, sales: 8352000},
  {year: 2002, efficiency: 29, sales: 8042000},
  {year: 2003, efficiency: 29.5, sales: 7556000},
  {year: 2004, efficiency: 29.5, sales: 7483000},
  {year: 2005, efficiency: 30.3, sales: 7660000}
]

function App() {

  const d3_url = "./histogram/index.html"

  return (
    <div className="App">
      <h2>Paste your tweets on the left, then click arrow.</h2>
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