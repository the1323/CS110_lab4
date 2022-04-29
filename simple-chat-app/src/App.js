import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
var z = 1;
function Button() {
  const [buttonText, setButtonText] = useState("Click me,   please");

  function handleClick() {
    z++;
    return setButtonText("Thanks, been clicked!" + z);
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}
function postBox() {
  return (
    <div className="App">
      <p>asd</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <Button />
    </div>
  );
}

export default App;
