import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import "./style.css";

const Input = ({ postId }) => {
  const dispatch = useDispatch();
  const [inputComment, setInputComment] = useState("");

  return (
    <div className="inpCommentContainer">
      <div style={{ display: "block" }}></div>
      <div className="inputContainer">
        <div className="input">
          <input
          className="inputElement"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          />
        </div>

        <div
          className="addComment"
          onClick={() => {
            dispatch(actions.addComment(postId, inputComment));
            setInputComment("");
          }}
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default Input;
