import React from "react";
import "./nav-bar.css";
import random_id from "./../../randomI_id";
import { NavLink, Link } from "react-router-dom";
import routes from "./../../routes";
import logo from "./logo.png";
import Icon from "./Icon";

const NavBar = () => {
  const mappingDestinations = arr =>
    arr.map(({ path }) => (
      <NavLink
        key={random_id()}
        className="nav-link"
        activeStyle={{ color: "red" }}
        to={path}
      >
        {/* removing slash from path */}
        {path.slice(1)}
      </NavLink>
    ));

  return (
      <div className="nav">
        <div className="logo">
          <Link className="link" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          {mappingDestinations(routes)}
          <Icon />
          <Icon fav />
        </nav>
      </div>
  );
};

export default NavBar;
