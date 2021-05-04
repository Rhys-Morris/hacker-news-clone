import React from "react";
import PropTypes from "prop-types";
import { fetchData, formatTimestamp } from "../utils/api";

export default class ArticleCard extends React.Component {
  state = {
    article: null,
  };

  componentDidMount() {
    (async () => {
      const data = await fetchData(
        `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`
      );
      this.setState({
        article: data,
      });
    })();
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  createMarkup() {
    const { article } = this.state;
    return {
      __html: `
        by <span class="underline">${article.by}</span> on ${formatTimestamp(
        article.time
      )} with <span class="underline">${
        article.kids ? article.kids.length : "0"
      }</span> comment${
        (article.kids && article.kids.length !== 1) || !article.kids ? "s" : ""
      }
    `,
    };
  }

  render() {
    return this.state.article ? (
      <div className="article-card">
        <h4 className="article-card__title">{this.state.article.title}</h4>
        <p
          className="article-card__byline"
          dangerouslySetInnerHTML={this.createMarkup()}
        ></p>
      </div>
    ) : null;
  }
}