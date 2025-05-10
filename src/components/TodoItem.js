import React from 'react';
import { SET_EDIT, SET_DELETE } from '../TodoContext';

const TodoItem = ({ todo, index, dispatch }) => {
    return (
        <li>
            {todo.text} 
            <button onClick={() => dispatch({ type: SET_EDIT, payload: index })}>Edit</button>
            <button onClick={() => dispatch({ type: SET_DELETE, payload: index })}>Delete</button>
        </li>
    );
};

export default TodoItem;
