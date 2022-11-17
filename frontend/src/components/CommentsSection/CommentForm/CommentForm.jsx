import React, { useState } from "react";
import axios from "axios";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";

const CommentForm = ({ getAllComments, videoId, token }) => {
  const [commentText, setCommentText] = useState("");

  async function addComment() {
    let newComment = {
      text: commentText,
      video_id: videoId,
    };
    let response = await axios.post(
      `http://127.0.0.1:8000/api/comments/${videoId}/`,
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
