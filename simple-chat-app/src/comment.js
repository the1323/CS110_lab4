import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentBox from "./commentInput";
import Comments from "./commentList";
let replyToggle = true;

const Comment = ({ comment, replies, addComment, getReplies }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="comment-card">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>
            {comment.name} id = {comment.id} d: {comment.depth} len=
            {replies.length}
          </Card.Title>
          <Card.Text>{comment.text}</Card.Text>
          <Button variant="light" type="button">
            &#11165;
          </Button>
          <span>213</span>
          <Button variant="light" type="button">
            &#11167;
          </Button>
          {comment.depth < 2 && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setHidden((s) => !s);
                console.log("clicked " + replyToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
              reply
            </button>
          )}
          {!hidden && (
            <CommentBox
              handleOnSubmit={(name, text) =>
                addComment(name, text, comment.depth + 1, comment.id)
              }
              setHidden={setHidden}
            />
          )}
          {/* stack cards here */}
          {replies.length > 0 && (
            <>
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply.id}
                  addComment={addComment}
                  replies={getReplies(reply.id)}
                  getReplies={getReplies}
                />
              ))}
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Comment;
