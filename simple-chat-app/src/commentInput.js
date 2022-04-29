import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./comment";

var t, n;
function CommentBox() {
  const [text, setText] = useState({ name: "", content: "" });
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    console.log("commentBox " + name + " " + text);
    setText({ ...text, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>
            <b>New Post</b>
          </Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="name"
                name="name"
                value={text.name}
                placeholder="Name..."
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={text.content}
                placeholder="Write a new post..."
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={() => handleOnChange()}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Comment handleOnChange={name} />
    </div>
  );
}
export default CommentBox;
