import React, { useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoListBlock = styled.div``;

const TodoList = ({ todos, setTodos, onToggle }) => {
  useEffect(() => {
    const fetchData = async () => {
      const { data: todos } = await axios.get(
        "https://todolistweb-mongo.herokuapp.com/todo"
      );
      console.log(todos);
      setTodos(todos);
    };
    fetchData();
  }, []);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem id={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </TodoListBlock>
  );
};
export default TodoList;
