import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);
  return (
    <main className="Articles">
      <h2>All Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li>
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
            </li>
          );
        })}
        <li>Article</li>
        <li>Article</li>
      </ul>
    </main>
  );
};

export default Articles;
