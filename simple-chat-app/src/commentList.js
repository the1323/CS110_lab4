import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentBox from "./commentInput";
import Comment from "./comment";
var data = [
  {
    text: "Whatever the mind of man can conceive and believe, it can achieve.",
    name: "Napoleon Hill",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    name: "Albert Einstein",
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    name: "Florence Nightingale",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    name: "Wayne Gretzky",
  },
];
function Comments() {
  const CommentData = data.map((each) => (
    <Comment name={each.name} text={each.text} depth="0" />
  ));
  const addComment = (name, text) => {
    console.log("new aaaaaaaaaaaaa");
    var nc = { name: { name }, text: { text } };
    data.push(nc);
  };
  return (
    <div className="comment-list">
      <div className="form">
        <CommentBox
          dataOut={(nameOut, textOut) => addComment(nameOut, textOut)}
        />
      </div>
      <h3>Comments</h3>

      <Comment
        name="sasa"
        text="Some quickSome quickSome quickSome quick"
        depth="0"
      />
      {CommentData}
    </div>
  );
}
export default Comments;
