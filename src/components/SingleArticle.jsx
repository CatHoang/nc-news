import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apis";
import Comments from "./Comments";
import moment from "moment";
import Votes from "./Votes";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);
  return (
    <div className="Single__article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>Author: {article.author}</p>
      <p>Created on {moment(article.created_at).format("DD-MM-YYYY")}</p>
      <Votes votes={article.votes} article_id={article.article_id} />
      <Comments />
    </div>
  );
};

export default SingleArticle;
