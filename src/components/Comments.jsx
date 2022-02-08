import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../utils/apis";
import { useParams } from "react-router-dom";
import CommentAdder from "./CommentAdder";
import CommentDelete from "./CommentDelete";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);
  console.log(comments);
  return (
    <div>
      <CommentAdder comments={comments} setComments={setComments} />
      <CommentDelete />
      <ul>
        {comments.map((comment) => {
          return <li>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default Comments;
