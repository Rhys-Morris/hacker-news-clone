import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import Loading from "./Loading";
import Byline from "./Byline.js";
import Comment from "./Comment.js";
import ThemeContext from "../contexts/theme";

const postReducer = (state, action) => {
  if (action.type === "success") {
    return {
      error: null,
      loading: false,
      post: action.post,
      comments: action.comments ? action.comments : null,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  } else {
    throw new Error("An unexpected error occurred");
  }
};

export default function Post({ location }) {
  const [state, dispatch] = React.useReducer(postReducer, {
    loading: true,
    error: null,
    post: null,
    comments: null,
  });
  const theme = React.useContext(ThemeContext);
  const { id } = queryString.parse(location.search);

  React.useEffect(() => {
    (async () => {
      const data = await fetchData(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const comments = data.kids;

      if (!comments) {
        dispatch({ type: "success", post: data });
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
      dispatch({ type: "success", post: data, comments: fetchedComments });
    })().catch((err) => {
      const errorMessage =
        err.message === "An error occured fetching data"
          ? err.message
          : "An unexpected error occured";
      dispatch({ type: "error", error: errorMessage });
    });
  }, [id]);

  const { loading, post, comments, error } = state;

  if (error) {
    return <div className={`error ${theme}`}>{error}</div>;
  }

  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && (
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
    </React.Fragment>
  );
}
