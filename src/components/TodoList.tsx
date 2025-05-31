import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from '../store/hooks';

const TodoList = () => {
  const list = useAppSelector((state) => state.todos.list);

  const sortedList = [...list].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <ul>
      {sortedList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
