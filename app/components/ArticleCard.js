import React from "react";
import PropTypes from "prop-types";
import Byline from "./Byline.js";

export default function ArticleCard({ article }) {
  return article ? (
    <div className="article-card">
      <a href={article.url} className="article-card__title">
        {article.title}
      </a>
      <br />
      <Byline post={article} />
    </div>
  ) : null;
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};
