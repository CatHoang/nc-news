import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apis";
import Comments from "./Comments";
import moment from "moment";
import Votes from "./Votes";
import "../styles/SingleArticle.css";

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
      <section className="single__article__container">
        <h2 className="single-heading">{article.title}</h2>
        <p>{article.body}</p>
        <p className="author__single__article">Author: {article.author}</p>
        <p>Created on {moment(article.created_at).format("DD-MM-YYYY")}</p>
        <Votes votes={article.votes} article_id={article.article_id} />
      </section>
      <Comments />
    </div>
  );
};

export default SingleArticle;
