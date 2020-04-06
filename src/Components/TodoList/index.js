import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";
import { useQuery } from "react-apollo-hooks";
import { SEE_TODOES } from "./query";

const TodoListBlock = styled.div``;

const TodoList = ({ todos, setTodos }) => {
  const { data, loading } = useQuery(SEE_TODOES);
  if (!loading && data) {
    console.log(" data is ", data);
    const _todoes = data.seeTodoes;
    setTodos(_todoes);
    console.log(_todoes);
  }
  return (
    <TodoListBlock>
      {loading && <div> Loading ...</div>}
      {!loading &&
        data &&
        todos.map((todo) => <TodoItem id={todo.id} todo={todo} />)}
    </TodoListBlock>
  );
};
export default TodoList;
