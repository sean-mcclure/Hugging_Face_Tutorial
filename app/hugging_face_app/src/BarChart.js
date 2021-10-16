import "./BarChart.css";

function BarChart(props) {
  return(
      <div className="barchart_wrapper">
        <div className="barchart_item"><div id="bar_1"></div>ANGER</div>
        <div className="barchart_item"><div id="bar_2"></div>JOY</div>
        <div className="barchart_item"><div id="bar_3"></div>OPTIMISM</div>
        <div className="barchart_item"><div id="bar_4"></div>SADNESS</div>
    </div>
  )
}
// {parse_data(props.data)}
export default BarChart;