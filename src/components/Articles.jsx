import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";
import { Link, useParams } from "react-router-dom";
import Votes from "./Votes";
import moment from "moment";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [sortByState, setSortByState] = useState("created_at");

  useEffect(() => {
    getArticles(topic, sortByState).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic, sortByState]);

  const dropDownInput = (e) => {
    setSortByState(e.target.value);
  };
  return (
    <main className="Articles">
      <h2>All {topic} Articles</h2>
      <label>sort by </label>
      <select value={sortByState} onChange={dropDownInput}>
        <option value="created_at">Created at</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <ul>
        {articles.map((article) => {
          const { article_id, title, author, topic, comment_count, votes } =
            article;

          return (
            <li className="Article" key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h2>{title}</h2>
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
