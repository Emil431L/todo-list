import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../TodoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
