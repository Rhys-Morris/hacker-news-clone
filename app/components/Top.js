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
    const { articles } = this.state;

    if (!articles) {
      return <div>Loading</div>;
    }

    return (
      <React.Fragment>
        <ul className="articles">
          {articles.map((article) => (
            <li key={article} className="articles__item">
              {article}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
