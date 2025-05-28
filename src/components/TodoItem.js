import React from "react";
import { useDispatch } from "react-redux";
import { setDelete, editTodo, toggleComplete } from "../store/TodoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setDelete(todo.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <li style={{ 
      textDecoration: todo.completed ? "line-through" : "none",
      opacity: todo.completed ? 0.5 : 1 
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default TodoItem;
