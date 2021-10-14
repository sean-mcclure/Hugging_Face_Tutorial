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
    <div>
      {parse_data(props.data)}
      </div>
  )
}

export default BarChart;