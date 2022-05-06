import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentBox from "./commentInput";
import Comment from "./comment";
var idCount = 0;
const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const rootComments = commentData.filter(
    (commentData) => commentData.depth === 0
  );
  const addComment = (name, text, depth, parentId) => {
    createComment(name, text, parentId, depth).then((c) => {
      setCommentData([c, ...commentData]);
    });
  };

  const getReplies = (Id) =>
    commentData.filter((commentData) => commentData.parentId === Id);

  return (
    <div className="comment-list">
      <h5 className="form-title">
        <b>New Post</b>
      </h5>
      <CommentBox depth="0" handleOnSubmit={addComment} />
      <h5>Comments</h5>
      {rootComments.map((rootComment) => (
        <Comment
          key={rootComment.id}
          comment={rootComment}
          addComment={addComment}
          replies={getReplies(rootComment.id)}
          getReplies={getReplies}
        />
      ))}
    </div>
  );
};

export const createComment = async (name, text, parentId, depth) => {
  idCount += 1;
  const pid = parentId !== undefined ? parentId : null;
  console.log(
    "add name: " +
      name +
      " depth: " +
      depth +
      " text: " +
      text +
      " ParentId: " +
      pid +
      " id: " +
      idCount
  );

  return {
    id: idCount,
    depth: depth,
    name: name,
    text: text,
    parentId: pid,
  };
};
export default Comments;
