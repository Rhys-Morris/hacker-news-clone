import React from "react";
import PropTypes from "prop-types";
import { fetchData } from "../utils/api.js";
import { formatTimestamp } from "../utils/helpers.js";
import { ThemeConsumer } from "../contexts/theme.js";
import { Link } from "react-router-dom";

export default class ArticleCard extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  render() {
    const { article } = this.props;
    console.log(article);
    return article ? (
      <ThemeConsumer>
        {({ theme }) => (
          <div className="article-card">
            <a href={article.url} className="article-card__title">
              {article.title}
            </a>
            <br />
            <span className={`article-card__byline ${theme}`}>
              {"by "}
              <Link
                to={`/user?id=${article.by}`}
                className="underline article-card__byline__author"
              >
                {`${article.by}`}
              </Link>
            </span>
            <span className={`article-card__byline ${theme}`}>
              {`on ${formatTimestamp(article.time)} with `}
              <Link to={`/post?id=${article.id}`} className="underline">
                {`${article.kids ? article.kids.length : "0"}`}
              </Link>
              {` comment${
                (article.kids && article.kids.length !== 1) || !article.kids
                  ? "s"
                  : ""
              }`}
            </span>
          </div>
        )}
      </ThemeConsumer>
    ) : null;
  }
}
