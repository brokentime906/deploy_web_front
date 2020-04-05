import React from "react";
import styled from "styled-components";
const TodoItemBlock = styled.div`
  display: flex;
`;

const TodoItem = ({ todo }) => {
  return (
    <TodoItemBlock>
      <button>check</button>
      <div>
        {todo.content} // {todo.done}
      </div>
      <button>delete</button>
    </TodoItemBlock>
  );
};
export default TodoItem;
