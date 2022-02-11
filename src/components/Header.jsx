import React from "react";
import Hamburger from "./Hamburger";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="Header">
      <div />
      <h2>
        Cat's New News
        <span className="loggedIn__user">
          Logged in: {loggedInUser.username}
        </span>
        <img
          className="avatar__url"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </h2>

      {/* <Hamburger /> */}
    </div>
  );
};

export default Header;
