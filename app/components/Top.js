import React from "react";
import { fetchTopArticles } from "../utils/api.js";

export default class Top extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    (async () => {
      const data = await fetchTopArticles(
        "https://hacker-news.firebaseio.com/v0/topstories.json?limit=20"
      );
      const topFifty = data.slice(0, 50);
      this.setState({
        articles: topFifty,
      });
    })();
  }

  render() {
    console.log(this.state.articles);
    return (
      <div>
        <h2>Rendered Top</h2>
      </div>
    );
  }
}
