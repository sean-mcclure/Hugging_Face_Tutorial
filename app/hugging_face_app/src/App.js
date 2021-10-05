import './App.css';


function call_api() {
    const tweets = ["walking to the park", "finding the store", "and this and that", "what about this", "finally we will see"]
    fetch("https://5000-chocolate-meerkat-z7hmwtyb.ws-us18.gitpod.io/inference?Sequences=" + tweets)//.join(","))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    })
}

function App() {

  return (
    <div className="App">
      <button onClick={(event) => {call_api()}}>CLICK</button>
    </div>
  );
}

export default App;