import React from 'react';
import { setInput, AddTodo, updateTodo, setPriority } from "../store/TodoSlice";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { toast } from 'react-toastify';
import FilterButtons from './FilterButtons';
import PriorityFilterButtons from './PriorityFilterButtons'

const TodoInput = () => {
  const input = useAppSelector((state) => state.todos.input);
  const isEditing = useAppSelector((state) => state.todos.isEditing);
  const priority = useAppSelector((state) => state.todos.priority);

  const dispatch = useAppDispatch();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(AddTodo());
    toast.success("The task is added!");
  };

  const handleUpdate = () => {
    dispatch(updateTodo());
    toast.info("The task is updated!");
  };

  const handlePriority: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setPriority(e.target.value as 'low' | 'medium' | 'high'));
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input type="text" value={input} onChange={handleInput} />
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <select value={priority} onChange={handlePriority}>
        <option value={'low'}>Low</option>
        <option value={'medium'}>Medium</option>
        <option value={'high'}>High</option>
      </select>

      <PriorityFilterButtons/>
      <FilterButtons/>
    </div>
  );
};

export default TodoInput;
