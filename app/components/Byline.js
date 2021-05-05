import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/helpers";

export default function Byline({ post }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <React.Fragment>
          <span className={`byline ${theme}`}>
            {"by "}
            <Link
              to={`/user?id=${post.by}`}
              className="underline byline__author"
            >
              {`${post.by}`}
            </Link>
          </span>
          <span className={`byline ${theme}`}>
            {`on ${formatTimestamp(post.time)} with `}
            <Link to={`/post?id=${post.id}`} className="underline">
              {`${post.kids ? post.kids.length : "0"}`}
            </Link>
            {` comment${
              (post.kids && post.kids.length !== 1) || !post.kids ? "s" : ""
            }`}
          </span>
        </React.Fragment>
      )}
    </ThemeConsumer>
  );
}
