import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArticleList from "./components/ArticleList.js";
import Nav from "./components/Nav.js";
import User from "./components/User.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme.js";

class App extends React.Component {
  state = {
    theme: "dark",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={`container ${this.state.theme}`}>
            <Nav />
            <Route exact path="/" component={ArticleList} />
            <Route path="/new" component={ArticleList} />
            <Route path="/user" component={User} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
