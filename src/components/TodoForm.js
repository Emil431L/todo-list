import React, { useContext } from "react";
import TodoContext, { SET_INPUT, SET_ADD, SET_UPDATE } from "../TodoContext";

const TodoForm = () => {
  const { dispatch, input, isEditing } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => dispatch({ type: SET_INPUT, payload: e.target.value })}
      />
      {isEditing ? (
        <button onClick={() => dispatch({ type: SET_UPDATE })}>Update</button>
      ) : (
        <button onClick={() => dispatch({ type: SET_ADD })}>Add</button>
      )}
    </div>
  );
};

export default TodoForm;
