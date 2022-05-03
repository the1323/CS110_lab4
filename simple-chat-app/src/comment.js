import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
var replies = [
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
function Comment(props) {
  var temp = 1 + Number(props.depth);
  const replyData = replies.map((each) => (
    <Comment name={each.name} text={each.text} depth={temp} />
  ));
  return (
    <div className="comment-card">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>hello {props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>

          <Button variant="light" type="button">
            &#11165;
          </Button>
          <span>213</span>
          <Button variant="light" type="button">
            &#11167;
          </Button>
          {props.depth < 3 && (
            <Button variant="light" type="button">
              reply
            </Button>
          )}
          {temp < 3 && (
            <Comment
              name={props.name + " depth " + temp}
              text={props.text}
              depth={temp}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Comment;
