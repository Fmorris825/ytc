import React from "react";

const Reply = ({ reply }) => {
  console.log(reply);
  return (
    <div className="ms-2 me-auto d-flex flex-column justify-content-start align-items-start">
      <div className="comment-user">{reply.user.username}:</div>
      <div className="comment-text">{reply.text}</div>
    </div>
  );
};

export default Reply;
