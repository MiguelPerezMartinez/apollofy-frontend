import React from "react";
import { Link } from "react-router-dom";

import { logOut } from "../../services/firebase";

import "./styles.css";

import ProfileCircleIcon from "../ProfileCircleIcon";

export default function RightMenu() {
  const w = window.innerWidth;
  if (w <= 400) {
    return <div>Hola mundo</div>;
  } else {
    return (
      <aside className="right-menu">
        <div>
          <Link to="/profile" className="right-menu-row">
            <ProfileCircleIcon />
            <div className="right-menu-row-title">Welcome $username</div>
          </Link>
        </div>
        <div>
          <div className="right-menu-row no-hover">
            <img
              src="./assets/img/search.svg"
              alt="search"
              className="right-menu-icon"
            />
            <div className="right-menu-row-title">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div>
          <Link to="/" className="right-menu-row">
            <img
              src="./assets/img/home.svg"
              alt="home"
              className="right-menu-icon"
            />
            <div className="right-menu-row-title">Home</div>
          </Link>
        </div>
        <div onClick={logOut}>
          <div className="right-menu-row">
            <img
              src="./assets/img/logout.svg"
              alt="logout"
              className="right-menu-icon"
            />
            <div className="right-menu-row-title">Logout</div>
          </div>
        </div>
      </aside>
    );
  }
}
