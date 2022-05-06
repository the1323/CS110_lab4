import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentBox = ({ handleOnSubmit, submitLabel, depth, setHidden }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("commentBox " + name + " " + text + " " + Number(depth));
    handleOnSubmit(name, text, Number(depth));
    setName("");
    setText("");
    document.getElementById("comment-form").reset();
    setHidden(true);
  };

  return (
    <div className="CommentBox" onSubmit={onSubmit}>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Form id="comment-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="name"
                name="name"
                placeholder="Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                placeholder="Write a new post..."
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={text.length < 1 || name.length < 1}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CommentBox;
