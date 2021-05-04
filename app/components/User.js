import React from "react";
import queryString from "query-string";
import { fetchData } from "../utils/api";
import { formatTimestamp } from "../utils/helpers.js";
import { ThemeConsumer } from "../contexts/theme";

export default class User extends React.Component {
  state = {
    user: null,
    posts: null,
    loadingPosts: true,
  };
  componentDidMount() {
    const { location } = this.props;
    const { id } = queryString.parse(location.search);

    (async () => {
      const data = await fetchData(
        `https://hacker-news.firebaseio.com/v0/user/${id}.json`
      );
      const recentPosts = data.submitted.slice(0, 50);
      data["username"] = id;
      console.log(data);
      this.setState({
        user: data,
        posts: recentPosts,
        loadingPosts: false,
      });
    })();
  }
  render() {
    const { user, posts, loadingPosts } = this.state;
    return (
      <React.Fragment>
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
                </div>

                {posts && (
                  <ul>
                    {posts.map((post) => (
                      <li key={post}>${post}</li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            )}
          </ThemeConsumer>
        )}
      </React.Fragment>
    );
  }
}
