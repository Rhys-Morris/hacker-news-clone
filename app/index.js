import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArticleList from "./components/ArticleList.js";
import Nav from "./components/Nav.js";
import User from "./components/User.js";
import Post from "./components/Post.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route exact path="/" component={ArticleList} key={1} />
              <Route exact path="/new" component={ArticleList} key={2} />
              <Route exact path="/user" component={User} />
              <Route exact path="/post" component={Post} />
              <Route
                render={() => (
                  <div className={`no-content ${this.state.theme}`}>
                    Content Not Found
                  </div>
                )}
              />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
