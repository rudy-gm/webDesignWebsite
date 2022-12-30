import "./Navbar.css";
import Logo from "../images/logo.png";
import {GoThreeBars} from 'react-icons/go'; 

import { Link, NavLink } from "react-router-dom";
import { links } from "../data";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" classname="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav_links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav_toggle-btn">
            <GoThreeBars></GoThreeBars>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
