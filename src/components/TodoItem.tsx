import React from 'react';
import { setDelete, editTodo, setToggle } from '../store/TodoSlice';
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

  const handleDelete = () => {
    dispatch(setDelete(todo.id));
    toast.error('Task is deleted');
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id));
    toast.info('Task is enabled');
  };

  const handleToggle = () => {
    dispatch(setToggle(todo.id));
    toast.success(todo.completed ? 'Task is incomplete' : 'Task is completed');
  };

  const priorityColor = {
    low: 'green',
    medium: 'orange',
    high: 'red',
  }[todo.priority];

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: priorityColor }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
      <strong> - {todo.priority} </strong>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default TodoItem;
