import React, { useState } from "react";
import "./Comment.css";
import axios from "axios";
import ReplyForm from "../../ReplyForm/ReplyForm";

const Comment = ({ comment, user, token }) => {
  const [reply, setReply] = useState({});

  async function getAllReplies() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${comment.id}/replies/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setReply(response.data);
  }
  return (
    <div className="ms-2 me-auto d-flex flex-column justify-content-start align-items-start">
      <div className="comment-user">{comment.user.username}:</div>
      <div className="comment-text">{comment.text}</div>
      <ReplyForm
        comment={comment}
        getAllReplies={getAllReplies}
        token={token}
      />
    </div>
  );
};

export default Comment;
