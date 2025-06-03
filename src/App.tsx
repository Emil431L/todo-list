import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setFilter, FilterStatus } from "./store/TodoSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.todos.filter);

  const handleFilterChange = (value: FilterStatus) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput />
      <div>
        <button onClick={() => handleFilterChange(FilterStatus.ALL)} disabled={filter === FilterStatus.ALL}>All</button>
        <button onClick={() => handleFilterChange(FilterStatus.ACTIVE)} disabled={filter === FilterStatus.ACTIVE}>Active</button>
        <button onClick={() => handleFilterChange(FilterStatus.COMPLETED)} disabled={filter === FilterStatus.COMPLETED}>Completed</button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
