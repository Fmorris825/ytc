import React, { useState } from "react";

const Comment = ({ comment, user }) => {
  console.log(comment);
  return (
    <div>
      <h4>{comment.user.username} says...</h4>"{comment.text}"
    </div>
  );
};

export default Comment;
