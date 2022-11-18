import React, { useState } from "react";

const Comment = ({ comment, user }) => {
  console.log(comment);
  return (
    <div className="ms-2 me-auto d-flex flex-column justify-content-start align-items-start">
      <div className="fw-bold">{comment.user.username}:</div>
      <div>{comment.text}</div>
    </div>
  );
};

export default Comment;
