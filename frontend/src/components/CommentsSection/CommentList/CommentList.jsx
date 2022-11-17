import React, { useState } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

const CommentList = ({ videoId, token }) => {
  const [comments, setComments] = useState([]);

  async function getAllComments() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${videoId}/`
    );
    setComments(response.data);
  }

  return (
    <div>
      <CommentForm getAllComments={getAllComments} token={token} />
      {comments.map((comment, index) => {
        return <h6>{<Comment comment={comment} key={index} />}</h6>;
      })}
    </div>
  );
};

export default CommentList;
