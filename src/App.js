import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nothing");
  const [object, setObject] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add count</button>
        
        <p>{name}</p>
        <button onClick={() => setName("Joel")}>Set name</button>
    
        <p>{JSON.stringify(object)}</p>
        <button onClick={() => setObject({ test: "test" })}>Set object</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
