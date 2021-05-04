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

  createMarkup() {
    const { article } = this.props;
    return {
      __html: `
         on ${formatTimestamp(article.time)} with <span class="underline">${
        article.kids ? article.kids.length : "0"
      }</span> comment${
        (article.kids && article.kids.length !== 1) || !article.kids ? "s" : ""
      }
    `,
    };
  }

  render() {
    return this.props.article ? (
      <ThemeConsumer>
        {({ theme }) => (
          <div className="article-card">
            <a href={this.props.article.url} className="article-card__title">
              {this.props.article.title}
            </a>
            <br />
            <span className={`article-card__byline ${theme}`}>
              {"by "}
              <Link
                to={`/user?id=${this.props.article.by}`}
                className="underline article-card__byline__author"
              >
                {`${this.props.article.by}`}
              </Link>
            </span>
            <span
              className={`article-card__byline ${theme}`}
              dangerouslySetInnerHTML={this.createMarkup()}
            ></span>
          </div>
        )}
      </ThemeConsumer>
    ) : null;
  }
}
