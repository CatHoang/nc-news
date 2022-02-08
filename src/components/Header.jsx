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
      <span>{loggedInUser.username}</span>
      <img src={loggedInUser.avatar_url} alt={loggedInUser.username} />
      {/* <Hamburger /> */}
    </div>
  );
};

export default Header;
