import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";
import { Link, useParams } from "react-router-dom";
import Votes from "./Votes";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);
  return (
    <main className="Articles">
      <h2>All Articles</h2>
      <ul>
        {articles.map((article) => {
          console.log(article);
          const { article_id, title, author, topic, comment_count, votes } =
            article;
          console.log(article_id);
          return (
            <li key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h3>{title}</h3>{" "}
              </Link>
              <p>Author: {author}</p>
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
