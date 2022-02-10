import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apis";
import Comments from "./Comments";
import moment from "moment";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.author}</p>
      <p>{article.votes}</p>
      <p>Created on {moment(article.created_at).format("DD-MM-YYYY")}</p>
      <Comments />
    </div>
  );
};

export default SingleArticle;
