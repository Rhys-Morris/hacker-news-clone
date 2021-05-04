import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import { formatTimestamp } from "../utils/helpers";
import Loading from "./Loading";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
  state = {
    loading: true,
    comments: [],
    post: null,
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    (async () => {
      const data = await fetchData(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const comments = data.kids;
      if (!comments) {
        this.setState({
          loading: false,
          post: data,
        });
        return;
      }

      const fetchedComments = await Promise.all(
        comments.map(async (comment) => {
          const fetched = await fetchData(
            `https://hacker-news.firebaseio.com/v0/item/${comment}.json`
          );
          console.log(fetched);
          return fetched;
        })
      );
      this.setState({
        loading: false,
        post: data,
        comments: fetchedComments,
      });
    })();
  }

  render() {
    const { loading, post, comments } = this.state;
    console.log(this.state);
    return (
      <React.Fragment>
        {loading && <Loading />}
        {!loading && (
          <ThemeConsumer>
            {({ theme }) => (
              <React.Fragment>
                <div className="post">
                  <h2 className="post__title">{post.title}</h2>\
                  <span className={`post__byline ${theme}`}>
                    {"by "}
                    <Link
                      to={`/user?id=${post.by}`}
                      className="underline article-card__byline__author"
                    >
                      {`${post.by}`}
                    </Link>
                  </span>
                  <span className={`article-card__byline ${theme}`}>
                    {`on ${formatTimestamp(post.time)} with `}
                    <Link to={`/post?id=${post.id}`} className="underline">
                      {`${post.kids ? post.kids.length : "0"}`}
                    </Link>
                    {` comment${
                      (post.kids && post.kids.length !== 1) || !post.kids
                        ? "s"
                        : ""
                    }`}
                  </span>
                </div>
                {comments.length > 0 && <div>Comments</div>}
              </React.Fragment>
            )}
          </ThemeConsumer>
        )}
      </React.Fragment>
    );
  }
}
