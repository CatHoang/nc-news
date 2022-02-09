import React, { useContext } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/apis";

const CommentDelete = ({ comments, setComments, comment }) => {
  const { loggedInUser } = useContext(UserContext);

  const handleDelete = () => {
    return deleteComment(comment.comment_id).then(() => {
      const filterComments = comments.filter(
        (com) => com.comment_id !== comment.comment_id
      );
      setComments(filterComments);
    });
  };

  return (
    <div>
      {loggedInUser.username === comment.author && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default CommentDelete;
