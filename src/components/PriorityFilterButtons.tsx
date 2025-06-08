import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPriorityFilter } from '../store/TodoSlice';

const PriorityFilterButtons = () => {
  const dispatch = useAppDispatch();
  const priorityFilter = useAppSelector((state) => state.todos.priorityFilter);

  const handlePriority = (priority: 'all' | 'high' | 'medium' | 'low') => {
    dispatch(setPriorityFilter(priority));
  };

  return (
    <div>
      {['all', 'high', 'medium', 'low'].map((priority) => (
        <button
          key={priority}
          onClick={() => handlePriority(priority as 'all' | 'high' | 'medium' | 'low')}
        >
          {priority}
        </button>
      ))}
    </div>
  );
};

export default PriorityFilterButtons;
