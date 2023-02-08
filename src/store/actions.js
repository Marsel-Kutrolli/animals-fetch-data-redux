import * as actionTypes from "./actionTypes";

const foldPost = (postId) => {
  return {
    type: actionTypes.toggleFold,
    payload: { postId },
  };
};

const deleteComment = (postId, commentId) => {
  return {
    type: actionTypes.del,
    payload: { postId, commentId },
  };
};

const likeComment = (postId, commentId) => {
  return {
    type: actionTypes.like,
    payload: { postId, commentId },
  };
};

const dislikeComment = (postId, commentId) => {
  return {
    type: actionTypes.dislike,
    payload: { postId, commentId },
  };
};

const addComment = (postId, text) => {
  return {
    type: actionTypes.addComment,
    payload: { postId, text },
  };
};

export { foldPost, likeComment, dislikeComment, deleteComment, addComment };
