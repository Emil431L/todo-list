import React from "react";
import { setInput, addTodo, updateTodo } from "../store/TodoSlice";
import {useAppSelector, useAppDispatch} from '../store/hooks'

const TodoInput = () => {
  const input = useAppSelector((state) => state.todos.input);
  const isEditing = useAppSelector((state) => state.todos.isEditing);
  const dispatch = useAppDispatch();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setInput(e.target.value));
  }

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
    
                   

