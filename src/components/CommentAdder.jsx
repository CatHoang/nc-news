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
    const newComment = { author: loggedInUser.username, body: newCommentInput };
    setComments(() => [newComment, ...comments]);
    postComment(article_id, loggedInUser.username, newCommentInput).then(() => {
      setNewCommentInput("");
    });
  }
  function handleChange(event) {
    setNewCommentInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Have your say:</label>
      <input
        value={newCommentInput}
        placeholder="comment here"
        onChange={handleChange}
        required
      ></input>
      <button type="submit">Post Comment!</button>
    </form>
  );
};

export default CommentAdder;
