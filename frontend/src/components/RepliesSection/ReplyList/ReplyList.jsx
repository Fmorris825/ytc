import React, { useState } from "react";
import Reply from "../Reply/Reply";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const ReplyList = ({ replies, token }) => {
  return (
    <div>
      <ListGroup as="ul">
        {replies.map((reply, index) => {
          // console.log(reply);
          return (
            <ListGroupItem
              as="li"
              className="flex-column justify-content-start align-items-end m-1 shadow"
            >
              {<Reply reply={reply} key={index} token={token} />}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ReplyList;
