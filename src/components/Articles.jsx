import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";
import { Link, useParams } from "react-router-dom";
import Votes from "./Votes";
import moment from "moment";
import "../styles/Articles.css";
import Loading from "./Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [sortByState, setSortByState] = useState("created_at");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortByState)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [topic, sortByState]);

  const dropDownInput = (e) => {
    setSortByState(e.target.value);
  };

  return (
    <main className="Articles">
      {isLoading && <Loading />}

      <h2 className="articles-heading">All {topic} Articles</h2>
      <label>sort by </label>
      <select value={sortByState} onChange={dropDownInput}>
        <option value="created_at">Created at</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <ul className="articles-container">
        {articles.map((article) => {
          const { article_id, title, author, topic, comment_count, votes } =
            article;

          return (
            <li className="Article" key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h1 className="article-title">{title}</h1>
              </Link>
              <p className="author">Author: {author}</p>
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
