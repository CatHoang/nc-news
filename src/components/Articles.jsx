import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";
import { Link, useParams } from "react-router-dom";
import Votes from "./Votes";
import moment from "moment";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic, sort_by, order } = useParams();
  const [sortByState, setSortByState] = useState("comment_count");
  const [orderState, setOrderState] = useState("asc");

  useEffect(() => {
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic, sort_by, order]);
  return (
    <main className="Articles">
      <h2>All Articles</h2>
      <label>sort by </label>
      <select>
        <option value="created_at" onClick={() => setSortByState("created_at")}>
          Created at
        </option>
        <option
          value="comment_count"
          onClick={() => setSortByState("comment_count")}
        >
          Comment Count
        </option>
        <option value="votes" onClick={() => setSortByState("votes")}>
          Votes
        </option>
      </select>

      <ul>
        {articles.map((article) => {
          const { article_id, title, author, topic, comment_count, votes } =
            article;

          return (
            <li key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h3>{title}</h3>{" "}
              </Link>
              <p>Author: {author}</p>
              <p>
                Created on {moment(article.created_at).format("DD-MM-YYYY")}
              </p>
              <p>Topic: {topic}</p>
              <p>{comment_count} comments</p>
              <Votes votes={votes} article_id={article_id} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
