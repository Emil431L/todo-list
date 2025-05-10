import React, { createContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

export const SET_INPUT = 'SET_INPUT';
export const SET_ADD = 'SET_ADD';
export const SET_EDIT = 'SET_EDIT';
export const SET_DELETE = 'SET_DELETE';
export const SET_UPDATE = 'SET_UPDATE';

const initialState = () => {
    const stored = localStorage.getItem("todos");
    return {
        todos: stored ? JSON.parse(stored) : [],
        input: '',
        isEditing: false,
        currentIndex: null
    };
};

function reducer(state, action) {
    switch (action.type) {
        case SET_INPUT:
            return { ...state, input: action.payload };
        case SET_ADD:
            const newTodo = {
                text: state.input,
                date: new Date()
            };
            return {
                ...state,
                todos: [newTodo, ...state.todos],
                input: ''
            };
        case SET_EDIT:
            return {
                ...state,
                input: state.todos[action.payload].text,
                isEditing: true,
                currentIndex: action.payload
            };
        case SET_DELETE:
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== action.payload)
            };
        case SET_UPDATE:
            const updatedTodos = state.todos.map((todo, i) =>
                i === state.currentIndex ? { ...todo, text: state.input } : todo
            );
            return {
                ...state,
                todos: updatedTodos,
                input: '',
                isEditing: false,
                currentIndex: null
            };
        default:
            return state;
    }
}

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, undefined, initialState);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]); 

    return (
        <TodoContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
