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
  const [voteCount, setVoteCount] = useState(0);
  const handleVote = (dir) => {
    if (dir === -1 && voteCount === 0) return;
    setVoteCount((s) => s + dir);
  };
  return (
    <div className="comment-card">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <p>{comment.name}</p>
          <p>{comment.text}</p>
          <Button
            variant="light"
            type="button"
            onClick={() => {
              handleVote(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </Button>
          <span>{voteCount}</span>
          <Button
            variant="light"
            type="button"
            onClick={() => {
              handleVote(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
          {comment.depth < 2 && (
            <Button
              style={{ color: "grey" }}
              variant="light"
              className="btn btn-light btn-sm"
              onClick={() => {
                setHidden((s) => !s);
                console.log("clicked " + replyToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
              &nbsp;Reply
            </Button>
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
