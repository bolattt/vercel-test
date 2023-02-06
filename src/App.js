import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const URL = process.env.REACT_APP_API_URL + "/test";
console.log(URL);
function App() {
  const [result, setResult] = useState("");

  function fetchApi() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setResult(data.body));
  }
  return (
    <div className="App">
      <button onClick={fetchApi}>Fetch API</button>
      <p> Result : {result} </p>
    </div>
  );
}

export default App;
