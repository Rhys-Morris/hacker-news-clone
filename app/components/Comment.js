import React from "react";
import ThemeContext from "../contexts/theme";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/helpers";

export default function Comment({ comment }) {
  const theme = React.useContext(ThemeContext);

  const renderMarkup = () => {
    return { __html: `${comment.text}` };
  };

  return (
    <div className={`comment ${theme}`}>
      <span className={`byline ${theme}`}>
        {"by "}
        <Link
          to={`/user?id=${comment.by}`}
          className="underline byline__author"
        >
          {`${comment.by}`}
        </Link>
      </span>
      <span className={`byline ${theme}`}>
        {`on ${formatTimestamp(comment.time)}`}
      </span>
      <p className="comment__text" dangerouslySetInnerHTML={renderMarkup()}></p>
    </div>
  );
}
