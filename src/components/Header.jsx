import React from "react";
import Hamburger from "./Hamburger";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="Header">
      <div />
      <div>Cat's New News</div>
      <span className="logged__username">
        Logged in: {loggedInUser.username}
      </span>
      <img
        className="avatar__url"
        src={loggedInUser.avatar_url}
        alt={loggedInUser.username}
      />
      {/* <Hamburger /> */}
    </div>
  );
};

export default Header;
