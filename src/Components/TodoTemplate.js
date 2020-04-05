import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const TodoTemplateBlock = styled.div``;

const TodoTemplate = ({ todos, setTodos }) => {
  return (
    <TodoTemplateBlock>
      <div>Shared Todo List</div>
      <TodoInsert />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplateBlock>
  );
};
export default TodoTemplate;
