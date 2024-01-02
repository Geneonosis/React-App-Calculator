import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>
        this is my silly little play calculator project, please don't mind me
      </p>
      <Counter />
      <Calculator />
    </div>
  );
}

export default App;
