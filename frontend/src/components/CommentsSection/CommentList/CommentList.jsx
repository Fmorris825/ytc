import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import useAuth from "../../../hooks/useAuth";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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

  return user ? (
    <div>
      <CommentForm
        getAllComments={getAllComments}
        token={token}
        videoId={videoId}
      />
      <ListGroup as="ul">
        {comments.map((comment, index) => {
          return (
            <ListGroupItem
              as="li"
              className="flex-column justify-content-start align-items-start"
            >
              {<Comment comment={comment} key={index} user={user} />}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  ) : (
    <div>
      <h5>
        <Link to="/login">Login</Link> or <Link to="/register">register</Link>{" "}
        to comment.
      </h5>
      <ListGroup as="ul">
        {comments.map((comment, index) => {
          return (
            <ListGroupItem
              as="li"
              className="flex-column justify-content-start align-items-start"
            >
              {<Comment comment={comment} key={index} user={user} />}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CommentList;
