import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const TodoTemplateBlock = styled.div`
  &:not(&:last-child) {
    margin-top: 20px;
  }
  width: 350px;
`;
const TodoTitle = styled.div`
  margin-top: 40px;
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TodoTemplate = ({ todos, setTodos, onToggle }) => {
  return (
    <TodoTemplateBlock>
      <TodoTitle>Shared Todo List</TodoTitle>
      <TodoInsert setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} onToggle={onToggle}/>
    </TodoTemplateBlock>
  );
};
export default TodoTemplate;
