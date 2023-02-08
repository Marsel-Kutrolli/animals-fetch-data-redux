import React from "react";
import "./style.css";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { foldPost } from "../store/actions";
import Input from "./Input";
import Contact from "./Contact";
const Card = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <img alt="dataImg" src={data.image} style={{borderRadius: 18}} />
      <div className="btn-close" onClick={() => dispatch(foldPost(data.id))}>
        {data.isClosed ? "Open" : "Close"}
      </div>
      <div className="comments-container">
        {!data.isClosed &&
          data.comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                text={comment.text}
                likes={comment.likes}
                dislikes={comment.dislikes}
                isAdmin={comment.isMe}
                postId={data.id}
                commentId={comment.id}
              />
            );
          })}
        <Input postId={data.id} />
        <Contact />
      </div>
    </div>
  );
};

export default Card;
