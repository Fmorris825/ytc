import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import useAuth from "../../../hooks/useAuth";

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [user, token] = useAuth();

  async function getAllComments() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${videoId}/`
    );
    setComments(response.data);
  }

  useEffect(() => {
    getAllComments();
  }, [comments.length, videoId]);

  return (
    <div>
      <CommentForm
        getAllComments={getAllComments}
        token={token}
        videoId={videoId}
      />
      {comments.map((comment, index) => {
        return <h5>{<Comment comment={comment} key={index} user={user} />}</h5>;
      })}
    </div>
  );
};

export default CommentList;
