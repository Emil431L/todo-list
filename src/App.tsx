import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons'
import PriorityStats from './components/PriorityStats'
import PriorityFilterButtons from './components/PriorityFilterButtons'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <TodoInput />
      <PriorityFilterButtons/>
      <FilterButtons/>
      <TodoList />
      <PriorityStats />
      <ToastContainer />
    </div>
  );
}

export default App;
