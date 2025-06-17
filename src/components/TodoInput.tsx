import React from 'react';
import { AddTodo, updateTodo } from "../store/TodoSlice";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { toast } from 'react-toastify';

const TodoInput = () => {
  const isEditing = useAppSelector((state) => state.todos.isEditing);
  const currentId = useAppSelector((state) => state.todos.currentId);
  const list = useAppSelector((state) => state.todos.list);
  const [input, setInputState] = React.useState('');
  const [priority, setPriorityState] = React.useState<'low' | 'medium' | 'high'>('low');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isEditing && currentId) {
      const todo = list.find(t => t.id === currentId);
      if (todo) {
        setInputState(todo.text);
        setPriorityState(todo.priority);
      }
    } else {
      setInputState('');
      setPriorityState('low');
    }
  }, [isEditing, currentId, list]);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputState(e.target.value);
  };

  const handleAdd = () => {
    if (!input.trim()) {
      toast.error("Input cannot be empty");
      return;
    }
    dispatch(AddTodo({ text: input, priority }));
    setInputState('');
    setPriorityState('low');
    toast.success("The task is added!");
  };

  const handleUpdate = () => {
    if (!input.trim() || !currentId) {
      toast.error("Input cannot be empty");
      return;
    }
    dispatch(updateTodo({ id: currentId, text: input, priority }));
    setInputState('');
    setPriorityState('low');
    toast.info("The task is updated!");
  };

  const handlePriority: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setPriorityState(e.target.value as 'low' | 'medium' | 'high');
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input type="text" value={input} onChange={handleInput} />
      <select value={priority} onChange={handlePriority}>
        <option value={'low'}>Low</option>
        <option value={'medium'}>Medium</option>
        <option value={'high'}>High</option>
      </select>
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
    </div>
  );
};

export default TodoInput;
