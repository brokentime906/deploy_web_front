import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./Components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트 공부", done: false },
  ]);
  return (
    <div className="App">
      <TodoTemplate todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
