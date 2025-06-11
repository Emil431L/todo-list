import React from 'react';
import { useAppSelector } from '../store/hooks';
import TodoItem from './TodoItem';
import { Filter } from '../store/TodoSlice';
import {filterByProperty} from '../components/utils/FilterHelpers'

const TodoList = () => {
  const list = useAppSelector((state) => state.todos.list);
  const filter = useAppSelector((state) => state.todos.filter);
  const priorityFilter = useAppSelector((state) => state.todos.priorityFilter);

  const getFilteredList = () => {

    let result = list

    if (filter === Filter.Completed) {
      result = filterByProperty(result, 'completed', true)
    }

    else if (filter === Filter.Active) {
      result = filterByProperty(result, 'completed', false)
    }

    if (priorityFilter !== 'all') {
      result = filterByProperty(result, 'priority', priorityFilter)
    }

    return result
  }

  const filteredList = getFilteredList()

  return (
    <ul>
      {filteredList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
