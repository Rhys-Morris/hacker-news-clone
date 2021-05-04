import React from "react";
import ArticleCard from "./ArticleCard.js";
import { fetchData, fetchArticles } from "../utils/api.js";
import Loading from "./Loading.js";

export default class Top extends React.Component {
  state = {
    articles: null,
    loading: true,
  };

  componentDidMount() {
    // Check route - if home render top stories, if /new render new stories
    const content =
      this.props.location.pathname === "/" ? "topstories" : "newstories";

    (async () => {
      const articles = await fetchData(
        `https://hacker-news.firebaseio.com/v0/${content}.json?limit=20`
      );
      let topFifty = articles.slice(0, 50);
      const converted = await Promise.all(
        topFifty.map(async (article) => {
          const fetched = await fetchData(
            `https://hacker-news.firebaseio.com/v0/item/${article}.json`
          );
          return fetched;
        })
      );
      this.setState({
        articles: converted,
        loading: false,
      });
    })();
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <React.Fragment>
        {/* Loading */}
        {loading && <Loading />}
        {/* Loaded */}
        {!loading && (
          <ul className="articles">
            {articles.map((article) => (
              <li
                key={article?.id || new Date().getTime()}
                className="articles__item"
              >
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
}
