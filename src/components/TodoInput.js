import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, addTodo, updateTodo } from "../store/TodoSlice";

const TodoInput = () => {
  const input = useSelector((state) => state.todos.input);
  const isEditing = useSelector((state) => state.todos.isEditing);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addTodo());
  };

  const handleUpdate = () => {
    dispatch(updateTodo());
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
    </div>
  );
};

export default TodoInput;
