import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArticleList from "./components/ArticleList.js";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme.js";
import Loading from "./components/Loading";

const User = React.lazy(() => import("./components/User.js"));
const Post = React.lazy(() => import("./components/Post.js"));

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
          <div className={`${this.state.theme}-theme`}>
            <div className={`container ${this.state.theme}`}>
              <Nav />
              <React.Suspense fallback={<Loading />}>
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
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
