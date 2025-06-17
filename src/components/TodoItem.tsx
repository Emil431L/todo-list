import React, { useState } from 'react';
import { setDelete, setToggle, updateTodo } from '../store/TodoSlice';
import { useAppDispatch } from '../store/hooks';
import { toast } from 'react-toastify';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(todo.text);
  const [priority, setPriority] = useState(todo.priority);

  const handleDelete = () => {
    dispatch(setDelete(todo.id));
    toast.error('Task is deleted');
  };

  const handleToggle = () => {
    dispatch(setToggle(todo.id));
    toast.success(todo.completed ? 'Task is incomplete' : 'Task is completed');
  };

  const handleEdit = () => {
    if (isEditing) {
      if (!input.trim()) {
        toast.error('Input cannot be empty');
        return;
      }
      dispatch(updateTodo({ id: todo.id, text: input, priority }));
      toast.info('Task is updated');
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const priorityColor = {
    low: 'green',
    medium: 'orange',
    high: 'red',
  }[todo.priority];

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: priorityColor,
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </>
      ) : (
        <>
          {todo.text} - <strong>{todo.priority}</strong>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Update' : 'Edit'}</button>
    </li>
  );
};

export default TodoItem;
