import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from '../store/hooks';
import { FilterStatus } from "../store/TodoSlice";

const TodoList = () => {
  const list = useAppSelector((state) => state.todos.list);
  const filter = useAppSelector((state) => state.todos.filter);

  const filteredList = list.filter((todo) => {
    if (filter === FilterStatus.ACTIVE) return !todo.completed;
    if (filter === FilterStatus.COMPLETED) return todo.completed;
    return true;
  });

  const sortedList = [...filteredList].sort(
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
