import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(189, 54, 39)",
};

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__link-box">
          <NavLink to="/" className="nav__link" exact activeStyle={activeStyle}>
            Top
          </NavLink>
          <NavLink to="/new" className="nav__link" activeStyle={activeStyle}>
            New
          </NavLink>
        </div>
        <p>ICON</p>
      </nav>
    );
  }
}