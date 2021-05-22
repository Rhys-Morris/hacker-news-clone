import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import { formatTimestamp } from "../utils/helpers.js";
import ThemeContext from "../contexts/theme";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const userReducer = (state, action) => {
  if (action.type === "success") {
    return {
      error: null,
      loading: false,
      posts: action.posts,
      user: action.user,
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

export default function User({ location }) {
  const { id } = queryString.parse(location.search);
  const [state, dispatch] = React.useReducer(userReducer, {
    loading: true,
    error: null,
    posts: null,
    user: null,
  });
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    (async () => {
      const data = await fetchData(
        `https://hacker-news.firebaseio.com/v0/user/${id}.json`
      );
      const recentPosts = data.submitted.slice(0, 50);

      let converted = await Promise.all(
        recentPosts.map(async (post) => {
          const fetched = await fetchData(
            `https://hacker-news.firebaseio.com/v0/item/${post}.json`
          );
          return fetched;
        })
      );
      converted = converted.filter((post) => !post.deleted && post.title);
      data["username"] = id;

      dispatch({ type: "success", user: data, posts: converted });
    })().catch((err) => {
      const errorMessage =
        err.message === "An error occured fetching data"
          ? err.message
          : "An unexpected error occured";
      dispatch({ type: "error", error: errorMessage });
    });
  }, [id]);

  const renderMarkup = () => {
    const { user } = state;
    return { __html: `${user.about ? user.about : ""}` };
  };

  const { user, posts, loading, error } = state;

  if (error) {
    return <div className={`error ${theme}`}>{error}</div>;
  }

  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && (
        <React.Fragment>
          <div className="user">
            <h3 className={`user__username ${theme}`}>{user.username}</h3>
            <span className={`user__details ${theme}`}>
              joined
              <span className="bold">{` ${formatTimestamp(
                user.created
              )} `}</span>
              has
              <span className="bold">{` ${user.karma} `}</span>
              karma
            </span>
            <p
              className={`user__about ${theme}`}
              dangerouslySetInnerHTML={renderMarkup()}
            ></p>
          </div>

          {posts && (
            <React.Fragment>
              <h3 className={`user__recent-posts ${theme}`}>Recent Posts</h3>
              <ul className="articles">
                {posts.map((post) => (
                  <li className="articles__item" key={post.id}>
                    <ArticleCard article={post} />
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
