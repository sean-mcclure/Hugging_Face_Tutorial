import "./BarChart.css";

function BarChart(props) {
  function parse_data(data) {
      var res = {

      };
      data.forEach(function(obj) {
          res.push("<div>" + obj.Letter + "</div>")
      })
      return(res)
  }
  return(
    <div className="barchart_wrapper">
      <div className="barchart_item"></div>
      <div className="barchart_item"></div>
      <div className="barchart_item"></div>
      <div className="barchart_item"></div>
    </div>
  )
}
// {parse_data(props.data)}
export default BarChart;