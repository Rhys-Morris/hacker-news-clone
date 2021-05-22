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

function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={`${theme}-theme`}>
          <div className={`container ${theme}`}>
            <Nav toggleTheme={toggleTheme} />
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={ArticleList} key={1} />
                <Route exact path="/new" component={ArticleList} key={2} />
                <Route exact path="/user" component={User} />
                <Route exact path="/post" component={Post} />
                <Route
                  render={() => (
                    <div className={`no-content ${theme}`}>
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

ReactDOM.render(<App />, document.getElementById("root"));
