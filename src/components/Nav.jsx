import { useState, useEffect } from "react";
import { getTopics } from "../utils/apis";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Nav = () => {
  const [topics, SetTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topicsFromApi) => {
        SetTopics(topicsFromApi);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <nav className="Navbar">
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
