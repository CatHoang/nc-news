import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import Nav from "./Nav";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [showUser, setShowUser] = useState(false);
  return (
    <header className="Header">
      <div className="header-main">
        <div className="header-left">
          <Link to="/">Cat's New News</Link>
        </div>

        <div className="header-right">
          <Nav />
          <button
            className="show-user-button"
            onClick={() => setShowUser(!showUser)}
          >
            <img
              className="avatar__url"
              src={loggedInUser.avatar_url}
              alt={loggedInUser.username}
            />
          </button>

          {showUser && (
            <div className="show-user-dropdown">
              <p className="loggedIn__user">User: {loggedInUser.username}</p>
            </div>
          )}
        </div>
      </div>
      <div className="nav-mobile">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
