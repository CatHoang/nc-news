import React, { useState } from "react";
import { postComment } from "../utils/apis";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const CommentAdder = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { article_id, comments, setComments } = props;
  const [newCommentInput, setNewCommentInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    postComment(article_id, loggedInUser.username, newCommentInput).then(
      (postedComment) => {
        setNewCommentInput("");
        setComments(() => [postedComment, ...comments]);
      }
    );
  }
  function handleChange(event) {
    setNewCommentInput(event.target.value);
  }

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <textarea
        className="comment-input"
        value={newCommentInput}
        placeholder="Have your say here....."
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="comment-button">
        Post Comment!
      </button>
    </form>
  );
};

export default CommentAdder;
