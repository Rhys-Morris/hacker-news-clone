import React from "react";
import ArticleCard from "./ArticleCard.js";
import { fetchData } from "../utils/api.js";
import Loading from "./Loading.js";
import ThemeContext from "../contexts/theme.js";

const topReducer = (state, action) => {
  if (action.type === "success") {
    return {
      ...state,
      articles: action.articles,
      loading: false,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.error.message,
      loading: false,
      articles: null,
    };
  } else {
    throw new Error("An unexpected error occurred");
  }
};

export default function Top({ location }) {
  const [state, dispatch] = React.useReducer(topReducer, {
    articles: null,
    loading: true,
    error: null,
  });
  const theme = React.useContext(ThemeContext);

  const content = location.pathname === "/" ? "topstories" : "newstories";

  React.useEffect(() => {
    (async () => {
      const articles = await fetchData(
        `https://hacker-news.firebaseio.com/v0/${content}.json?limit=20`
      );

      let topFifty = articles.slice(0, 50);
      const converted = await Promise.all(
        topFifty.map(async (article) => {
          const fetched = await fetchData(
            `https://hacker-news.firebaseio.com/v0/item/${article}.json`
          );
          return fetched;
        })
      );
      dispatch({ type: "success", articles: converted });
    })().catch((err) => {
      const errorMessage =
        err.message === "An error occured fetching data"
          ? err.message
          : "An unexpected error occured";
      dispatch({ type: "error", error: errorMessage, loading: false });
    });
  }, [content]);

  const { articles, loading, error } = state;

  if (error) {
    return <div className={`error ${theme}`}>{error}</div>;
  }

  return (
    <React.Fragment>
      {/* Loading */}
      {loading && <Loading />}
      {/* Loaded */}
      {!loading && (
        <ul className="articles">
          {articles.map((article) => (
            <li
              key={article?.id || new Date().getTime()}
              className="articles__item"
            >
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
