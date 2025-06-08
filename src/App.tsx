import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
      <ToastContainer/>
    </div>
  );
}

export default App;
