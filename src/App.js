import React, { useState, useCallback} from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./Components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);

  const onToggle = useCallback(
    id=> {
      setTodos(
        todos.map((todo, key) => todo._id === id ? {...todo, done: !todo.done} : todo,),
      );
    },
    [todos],
  );

  return (
    <div className="App">
      <TodoTemplate todos={todos} setTodos={setTodos} onToggle={onToggle}/>
    </div>
  );
}

export default App;
