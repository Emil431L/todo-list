import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
