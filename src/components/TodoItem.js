import React from "react";
import { useDispatch } from "react-redux";
import { setDelete, editTodo } from "../store/TodoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setDelete(todo.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id));
  };

  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default TodoItem;
