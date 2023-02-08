import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment, likeComment, dislikeComment } from "../store/actions";
import "./style.css";

const Comment = ({ text, likes, dislikes, isAdmin, postId, commentId }) => {
  const dispatch = useDispatch();

  return (
    <div className="comment-container">
      <div className="comment">{text}</div>
      <div className="buttons-right">
        <div className="likes-nr">{likes}</div>
        <div className="dislikes-nr">{dislikes}</div>
        {isAdmin && (
          <div
            className="del-btn"
            onClick={() => dispatch(deleteComment(postId, commentId))}
          >
            Delete
          </div>
        )}
        <div
          className="like-icon"
          onClick={() => dispatch(likeComment(postId, commentId))}
        >
          like
        </div>
        <div
          className="dislike-icon"
          onClick={() => dispatch(dislikeComment(postId, commentId))}
        >
          dislike
        </div>
      </div>
    </div>
  );
};

export default Comment;
