import React, { useState } from "react";
import "./Comment.css";
import axios from "axios";
import ReplyForm from "../../RepliesSection/ReplyForm/ReplyForm";
import ReplyList from "../../RepliesSection/ReplyList/ReplyList";

const Comment = ({ comment, user, token }) => {
  const [replies, setReplies] = useState([]);

  async function getAllReplies() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${comment.id}/replies/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setReplies(response.data);
  }
  return (
    <div className="ms-2 me-auto d-flex flex-column justify-content-start align-items-start">
      <div className="comment-user">{comment.user.username}:</div>
      <div className="comment-text">{comment.text}</div>
      <ReplyList replies={replies} token={token} />
      <ReplyForm
        comment={comment}
        getAllReplies={getAllReplies}
        token={token}
      />
    </div>
  );
};

export default Comment;
