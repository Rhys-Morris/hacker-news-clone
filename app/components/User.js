import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import { formatTimestamp } from "../utils/helpers.js";
import { ThemeConsumer } from "../contexts/theme";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

export default class User extends React.Component {
  state = {
    user: null,
    posts: null,
    loadingPosts: true,
    error: null,
  };
  componentDidMount() {
    const { location } = this.props;
    const { id } = queryString.parse(location.search);

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
      console.log(data);
      this.setState({
        user: data,
        posts: converted,
        loadingPosts: false,
      });
    })().catch((err) => {
      const errorMessage =
        err.message === "An error occured fetching data"
          ? err.message
          : "An unexpected error occured";
      this.setState({
        error: errorMessage,
        loading: false,
      });
    });
  }

  renderMarkup() {
    const { user } = this.state;
    return { __html: `${user.about ? user.about : ""}` };
  }

  render() {
    const { user, posts, loadingPosts, error } = this.state;

    if (error) {
      return (
        <ThemeConsumer>
          {({ theme }) => <div className={`error ${theme}`}>{error}</div>}
        </ThemeConsumer>
      );
    }

    return (
      <React.Fragment>
        {loadingPosts && <Loading />}
        {!loadingPosts && (
          <ThemeConsumer>
            {({ theme }) => (
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
                    dangerouslySetInnerHTML={this.renderMarkup()}
                  ></p>
                </div>

                {posts && (
                  <React.Fragment>
                    <h3 className={`user__recent-posts ${theme}`}>
                      Recent Posts
                    </h3>
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
          </ThemeConsumer>
        )}
      </React.Fragment>
    );
  }
}
