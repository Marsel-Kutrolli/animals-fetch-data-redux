import dataArray from "../mockData/dataArray";
import * as actionTypes from "./actionTypes";

const reducer = (state = dataArray, action) => {
  switch (action.type) {
    case actionTypes.toggleFold:
      const postId = action.payload.postId;
      const postIndex = state.findIndex((element) => element.id === postId);
      if (postIndex === -1) {
        return state;
      }
      const post = state[postIndex];
      post.isClosed = !post.isClosed;
      const newState = [...state];
      newState[postIndex] = post;
      return newState;
    case actionTypes.like:
      const { postId: postIdToLike, commentId: commentIdToLike } =
        action.payload;
      const postIndexToLike = state.findIndex((el) => el.id === postIdToLike);
      const postToLike = state[postIndexToLike];
      const commentIndexToLike = postToLike.comments.findIndex(
        (el) => el.id === commentIdToLike
      );
      const commentToLike = postToLike.comments[commentIndexToLike];
      if (commentToLike.alreadyLiked) {
        return state;
      } else {
        commentToLike.likes = commentToLike.likes + 1;
        commentToLike.alreadyLiked = true;
        if (commentToLike.alreadyDisliked) {
          commentToLike.dislikes = commentToLike.dislikes - 1;
          commentToLike.alreadyDisliked = false;
        }
      }
      postToLike[commentIndexToLike] = commentToLike;
      const newStateLike = [...state];
      newStateLike[postIndexToLike] = postToLike;
      return newStateLike;
    case actionTypes.dislike:
      const { postId: postIdToDislike, commentId: commentIdToDislike } =
        action.payload;
      const postIndexToDislike = state.findIndex(
        (el) => el.id === postIdToDislike
      );
      if (postIndexToDislike === -1) {
        console.log("postIndexToDislike === -1: ", postIndexToDislike === -1);
        return state;
      }
      const postToDislike = state[postIndexToDislike];
      const commentIndexToDislike = postToDislike.comments.findIndex(
        (el) => el.id === commentIdToDislike
      );
      if (commentIndexToDislike === -1) {
        console.log(
          "commentIndexToDislike === -1: ",
          commentIndexToDislike === -1
        );
        return state;
      }
      const commentToDislike = postToDislike.comments[commentIndexToDislike];
      if (commentToDislike.alreadyDisliked) {
        console.log(
          "commentToDislike.alreadyDisliked: ",
          commentToDislike.alreadyDisliked
        );

        return state;
      } else {
        commentToDislike.dislikes = commentToDislike.dislikes + 1;
        commentToDislike.alreadyDisliked = true;
        if (commentToDislike.alreadyLiked) {
          commentToDislike.likes = commentToDislike.likes - 1;
          commentToDislike.alreadyLiked = false;
        }
      }
      const newStateDislike = [...state];
      postToDislike[commentIndexToDislike] = commentToDislike;
      newStateDislike[postIndexToDislike] = postToDislike;
      return newStateDislike;
    case actionTypes.del:
      const { postId: postIdToDelete, commentId: commentIdToDelete } =
        action.payload;
      const postIndexToDelete = state.findIndex(
        (el) => el.id === postIdToDelete
      );
      if (postIndexToDelete === -1) {
        return state;
      }
      const postWithCommentToDelete = state[postIndexToDelete];
      postWithCommentToDelete.comments =
        postWithCommentToDelete.comments.filter(
          (el) => el.id !== commentIdToDelete
        );
      const newStateDel = [...state];
      newStateDel[postIndexToDelete] = postWithCommentToDelete;
      return newStateDel;
    case actionTypes.addComment:
      const { text: comment, postId: commentPostId } = action.payload;
      console.log("text: ", comment);
      console.log("commentPostId: ", commentPostId);
      const newCommentedPostIndex = state.findIndex(
        (post) => post.id === commentPostId
      );
      if (newCommentedPostIndex === -1) {
        return;
      }
      const newCommentedPost = state[newCommentedPostIndex];
      const newComment = {
        id:
          Math.ceil(Math.random() * 10) +
          comment +
          newCommentedPost.comments.length,
        text: comment,
        likes: 0,
        dislikes: 0,
        isMe: true,
      };
      newCommentedPost.comments = [...newCommentedPost.comments, newComment];
      const newStateWithComment = [...state];
      newStateWithComment[newCommentedPostIndex] = newCommentedPost;
      return newStateWithComment;
    default:
      console.error("This action is not handled yet", action.type);
      return state;
  }
};

export default reducer;
