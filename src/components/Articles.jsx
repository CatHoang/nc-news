import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";
import { Link, useParams } from "react-router-dom";

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
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>{" "}
              </Link>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
