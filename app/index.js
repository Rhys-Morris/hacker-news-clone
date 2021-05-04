import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Top from "./components/Top.js";

const App = () => (
  <div className="container">
    <h1>Hello World</h1>
    <Top />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
