import React from "react";
import ReactDOM from "react-dom";
import Forecast from "./components/Forecast/Forecast";
import "./app.css";

function App() {
  return (
    <div
      id="main-container"
      className="App container d-flex flex-column align-items-center justify-content-start"
    >
      <header className="App-header">
        <h1> Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
