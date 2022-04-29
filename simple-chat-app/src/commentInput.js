import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function CommentBox() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const handleOnChange = () => {
    console.log("commentBox " + name + " " + text);
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
                placeholder="Write a new post..."
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => handleOnChange()}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CommentBox;
