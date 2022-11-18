import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";

const CommentForm = ({ getAllComments, videoId }) => {
  const [commentText, setCommentText] = useState("");
  const [user, token] = useAuth();

  async function addComment() {
    let newComment = {
      text: commentText,
      video_id: videoId,
    };
    console.log(`On the CommentForm, the videoId is ${videoId}`);
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/`,
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        await getAllComments();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment();
    setCommentText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>What do you want to Comment?</FormLabel>
        <FormControl
          placeholder="Enter Comment"
          className="shadow-sm p-1 mb-1 bg-body rounded"
          type="text"
          onChange={(event) => setCommentText(event.target.value)}
          value={commentText}
        />
      </FormGroup>
      <Button type="submit">Comment</Button>
    </Form>
  );
};

export default CommentForm;
