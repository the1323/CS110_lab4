import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import CommentBox from "./commentInput";
import CommentList from "./commentList";

function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
