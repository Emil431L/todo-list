import React from 'react';
import { useAppSelector } from '../store/hooks';
import TodoItem from './TodoItem';
import { Filter } from '../store/TodoSlice';

const TodoList = () => {
  const list = useAppSelector((state) => state.todos.list);
  const filter = useAppSelector((state) => state.todos.filter);
  const priorityFilter = useAppSelector((state) => state.todos.priorityFilter)

  const filteredList = list.filter((todo) => {
  const statusMatch =
    (filter === Filter.All) ||
    (filter === Filter.Active && !todo.completed) ||
    (filter === Filter.Completed && todo.completed);

  const priorityMatch =
    priorityFilter === 'all' || todo.priority === priorityFilter;

  return statusMatch && priorityMatch;
});

  return (
    <ul>
      {filteredList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
  