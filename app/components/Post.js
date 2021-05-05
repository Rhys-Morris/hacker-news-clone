import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import Loading from "./Loading";
import Byline from "./Byline.js";
import Comment from "./Comment.js";
import { ThemeConsumer } from "../contexts/theme";

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

      let fetchedComments = await Promise.all(
        comments.map(async (comment) => {
          const fetched = await fetchData(
            `https://hacker-news.firebaseio.com/v0/item/${comment}.json`
          );
          return fetched;
        })
      );
      fetchedComments = fetchedComments.filter((comment) => !comment.deleted);
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
                  <h2 className="post__title">{post.title}</h2>
                  <Byline post={post} />
                </div>
                {comments.length > 0 && (
                  <React.Fragment>
                    <ul className="post__comments-list">
                      {comments.map((comment) => (
                        <li key={comment.id}>
                          <Comment comment={comment} />
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </ThemeConsumer>
        )}
      </React.Fragment>
    );
  }
}
