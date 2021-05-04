import React from "react";
import PropTypes from "prop-types";
import { fetchData, formatTimestamp } from "../utils/api";
import { ThemeConsumer } from "../contexts/theme";

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
      console.log(data);
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
      <ThemeConsumer>
        {({ theme }) => (
          <div className="article-card">
            <a href={this.state.article.url} className="article-card__title">
              {this.state.article.title}
            </a>
            <p
              className={`article-card__byline ${theme}`}
              dangerouslySetInnerHTML={this.createMarkup()}
            ></p>
          </div>
        )}
      </ThemeConsumer>
    ) : null;
  }
}
