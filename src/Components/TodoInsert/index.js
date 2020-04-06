import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { ADD_TODO } from "./query";
const TodoInsertBlock = styled.div`
  display: flex;
  font-size: 2rem;
  height: 30px;
  background: #495057;
`;
const Input = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
`;
const AddButton = styled.button`
  background: #868e96;
  outline: none;
  border: none;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
const TodoInsert = ({ todos, setTodos }) => {
  const newTodo = useInput("");
  const [addTodoMutation] = useMutation(ADD_TODO, {
    variables: { content: newTodo.value },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { addTodo: todo },
    } = await addTodoMutation();
    setTodos((prev) => [todo, ...prev]);
    newTodo.setValue("");
    window.location.reload();
    console.log("insert starts");
  };
  return (
    <form onSubmit={onSubmit}>
      <TodoInsertBlock>
        <Input
          placeholder={"할 일을 입력해주세요"}
          value={newTodo.value}
          onChange={newTodo.onChange}
        />
        <AddButton type="submit">
          <MdAdd />
        </AddButton>
      </TodoInsertBlock>
    </form>
  );
};
export default TodoInsert;
