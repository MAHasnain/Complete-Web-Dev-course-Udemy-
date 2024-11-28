import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/jokes`)
      .then((res) => {
        console.log(setJokes(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className="container">
        <h1>Jokes</h1>
        <p>Jokes: {jokes.length}</p>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
