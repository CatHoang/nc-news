import React, { useState } from "react";
import { postComment } from "../utils/apis";

const CommentAdder = (props) => {
  const { comments, setComments } = props;
  const [addComments, setAddComments] = useState({});

  function handleSubmit(event) {
    setComments((comments) => [comments, addComments]);
    setAddComments(addComments);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Have your say:</label>
      <input placeholder="comment here" required></input>
      <button
        type="submit"
        onClick={(e) => {
          return postComment(e.target.value);
        }}
      >
        Add!
      </button>
    </form>
  );
};

export default CommentAdder;
