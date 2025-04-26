import React, { useState, useEffect } from 'react';
import './Todo.css';

const App = () => {

    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });

    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = () => {
        if (input.trim()) {
            const newTodo = {
                text: input,
                date: new Date().toISOString(),
            };
            const newTodos = [...todos, newTodo].sort((a, b) => new Date(b.date) - new Date(a.date));
            setTodos(newTodos);
            setInput('');
        }
    };

    const handleDelete = (indexToDelete) => {
        const newTodos = todos.filter((_, index) => index !== indexToDelete);
        setTodos(newTodos);
    };

    const handleEdit = (index) => {
        setInput(todos[index].text);
        setIsEditing(true);
        setCurrentIndex(index);
    };

    const handleUpdate = () => {
        if (input.trim() && currentIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[currentIndex] = {
                text: input,
                date: updatedTodos[currentIndex].date, 
            };
            const sortedTodos = updatedTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
            setTodos(sortedTodos);
            setInput('');
            setIsEditing(false);
            setCurrentIndex(null);
        }
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-container">
            <h2>Todo List</h2>

            <input 
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {isEditing ? (
                <button onClick={handleUpdate}>Update</button>
            ) : (      
                <button onClick={handleClick}>Add</button>
            )}

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        <div className="button-group">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
