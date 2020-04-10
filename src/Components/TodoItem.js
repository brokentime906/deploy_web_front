import React, {useState} from "react";
import styled from "styled-components";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
const TodoItemBlock = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 1.2rem;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;
const DoneBox = styled.div`
  cursor: pointer;
  svg {
    color: skyblue;
  }
  margin-right: 10px;
`;

const DeleteBox = styled.div`
  cursor: pointer;
  svg {
    color: red;
  }
  margin-left: 10px;
`;
const Contents = styled.div`
  flex: 1;
`;

const EndContents = styled.div`
  text-decoration : line-through;
`;
const TodoItem = ({id, todo, onToggle}) => {
  return (
    <TodoItemBlock>
      <DoneBox onClick={() => onToggle(id)}>
        <MdCheckBoxOutlineBlank />
      </DoneBox>

      {
        todo.done
        ?
        <Contents>
          {id + todo.content} + 1
        </Contents>
        :
        <Contents>
          {id + todo.content} - 1
        </Contents>
      }
      <DeleteBox>
        <MdRemoveCircleOutline />
      </DeleteBox>
    </TodoItemBlock>
  );
};
export default TodoItem;
