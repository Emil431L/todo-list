import React, { useState } from 'react';
import { AddTodo, Priority } from "../store/TodoSlice";
import { useAppDispatch } from '../store/hooks';
import { toast } from 'react-toastify';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<Priority>('low');
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (!input.trim()) {
      toast.error("Input cannot be empty");
      return;
    }
    dispatch(AddTodo({ text: input, priority }));
    setInput('');
    setPriority('low');
    toast.success("The task is added!");
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value={'low'}>Low</option>
        <option value={'medium'}>Medium</option>
        <option value={'high'}>High</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
