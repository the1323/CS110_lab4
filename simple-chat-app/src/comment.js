import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Comment({ handleOnChange }) {
  return (
    <div className="App">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{handleOnChange}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Button variant="light" type="submit">
            &#11165;
          </Button>
          <span>213</span>
          <Button variant="light" type="submit">
            &#11167;
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Comment;
