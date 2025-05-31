import React from "react";
import { useAppDispatch } from "../store/hooks";
import { setDelete, editTodo, toggleComplete } from "../store/TodoSlice";
import type {Todo} from '../store/TodoSlice'

const TodoItem: React.FC<{ todo: Todo }> = ({ todo}) => {
  const dispatch = useAppDispatch();

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

