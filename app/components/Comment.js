import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/helpers";

export default class Comment extends React.Component {
  renderMarkup() {
    const { comment } = this.props;
    return { __html: `${comment.text}` };
  }
  render() {
    const { comment } = this.props;
    return (
      <ThemeConsumer>
        {({ theme }) => (
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
            <p
              className="comment__text"
              dangerouslySetInnerHTML={this.renderMarkup()}
            ></p>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
