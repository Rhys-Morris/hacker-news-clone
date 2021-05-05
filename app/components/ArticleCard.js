import React from "react";
import PropTypes from "prop-types";
import { fetchData } from "../utils/api.js";
import { formatTimestamp } from "../utils/helpers.js";
import { ThemeConsumer } from "../contexts/theme.js";
import { Link } from "react-router-dom";
import Byline from "./Byline.js";

export default class ArticleCard extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  render() {
    const { article } = this.props;
    return article ? (
      <ThemeConsumer>
        {({ theme }) => (
          <div className="article-card">
            <a href={article.url} className="article-card__title">
              {article.title}
            </a>
            <br />
            <Byline post={article} />
          </div>
        )}
      </ThemeConsumer>
    ) : null;
  }
}
