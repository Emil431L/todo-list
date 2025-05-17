import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInput,
  addTodo,
  setDelete,
  removeTodo,
  updateTodo,
} from "./TodoSlice";

function TodoApp() {
  const input = useSelector((state) => state.todos.input);
  const list = useSelector((state) => state.todos.list);
  const isEditing = useSelector((state) => state.todos.isEditing);
  const currentIndex = useSelector((state) => state.todos.currentIndex);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addTodo());
  };

  const handleDelete = (id) => {
    dispatch(setDelete(id));
  };

  const handleEdit = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdate = () => {
    dispatch(updateTodo());
  };

  const sortedList = [...list].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={input} onChange={handleInput} />

      {isEditing ? (
        <button onClick={() => handleUpdate(currentIndex)}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <ul>
        {sortedList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
