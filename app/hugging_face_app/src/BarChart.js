import "./BarChart.css";

function BarChart(props) {
  function parse_data(data) {
      var res = {
         "anger" : [],
         "joy" : [],
         "optimism" : [],
         "sadness" : []
      };
      data.forEach(function(obj) {
        if(obj.Letter === "A") {
          res["anger"].push(0);
        }
        if(obj.Letter === "B") {
          res["joy"].push(0);
        }
        if(obj.Letter === "C") {
          res["optimism"].push(0);
        }
        if(obj.Letter === "D") {
          res["sadness"].push(0);
        }
      })
      
      return(res)
  }
  return(
      <div className="barchart_wrapper">
      <div className="barchart_item">ANGER<div id="bar_1"></div></div>
      <div className="barchart_item">JOY<div id="bar_2"></div></div>
      <div className="barchart_item">OPTIMISM<div id="bar_3"></div></div>
      <div className="barchart_item">SADNESS<div id="bar_4"></div></div>
    </div>
  )
}
// {parse_data(props.data)}
export default BarChart;