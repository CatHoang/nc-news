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
      const sortedComments = commentsFromApi.sort((a, b) => {
        return +new Date(b.created_at) - +new Date(a.created_at);
      });
      console.log(">>", sortedComments);

      setComments(sortedComments);
    });
  }, [article_id]);

  return (
    <article>
      <CommentAdder
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />

      <ul className="comments-container">
        {comments.map((comment) => {
          return (
            <li className="comments" key={comment.comment_id}>
              {comment.body}
              <p className="comment-user ">User: {comment.author}</p>
              <CommentDelete
                comments={comments}
                setComments={setComments}
                comment={comment}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Comments;
