import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const URL = process.env.REACT_APP_API_URL;
console.log(URL);
function App() {
  const [result, setResult] = useState("");
  const [songs, setSongs] = useState([]);

  function fetchApi() {
    fetch(URL + "/test")
      .then((res) => res.json())
      .then((data) => setResult(data.body));
  }

  function fetchSongs() {
    fetch(URL + "/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }
  console.log(songs);

  return (
    <div className="App">
      <button onClick={fetchApi}>Fetch API</button>
      <p> Result : {result} </p>
      <button onClick={fetchSongs}>Fetch Songs</button>
      <h2>Songs </h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
