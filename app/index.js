import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArticleList from "./components/ArticleList.js";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="container">
      <Nav />
      <Route exact path="/" component={ArticleList} />
      <Route path="/new" component={ArticleList} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
