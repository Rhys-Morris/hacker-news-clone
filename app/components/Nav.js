import React from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../contexts/theme";

const activeStyle = {
  color: "rgb(189, 54, 39)",
};

export default function Nav({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  return (
    <nav className="nav">
      <div className="nav__link-box">
        <NavLink
          to="/"
          className={`nav__link ${theme}`}
          exact
          activeStyle={activeStyle}
        >
          Top
        </NavLink>
        <NavLink
          to="/new"
          className={`nav__link ${theme}`}
          activeStyle={activeStyle}
        >
          New
        </NavLink>
      </div>
      <div className={`nav__theme ${theme}`} onClick={toggleTheme}>
        {theme === "light" ? "🌕" : "🌞"}
      </div>
    </nav>
  );
}
