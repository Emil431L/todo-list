import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export enum Filter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export type Priority = 'low' | 'medium' | 'high';
export type PriorityFilter = Priority | 'all';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
}

interface TodoState {
  list: Todo[];
  filter: Filter;
  priorityFilter: PriorityFilter;
}

const initialState: TodoState = {
  list: [],
  filter: Filter.All,
  priorityFilter: 'all',
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    AddTodo(state, action: PayloadAction<Omit<Todo, 'id' | 'completed'>>) {
      state.list.push({
        id: nanoid(),
        text: action.payload.text,
        priority: action.payload.priority,
        completed: false,
      });
    },
    setDelete(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<Omit<Todo, 'completed'>>) {
      const todo = state.list.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.priority = action.payload.priority;
      }
    },
    setToggle(state, action: PayloadAction<string>) {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    setPriorityFilter(state, action: PayloadAction<PriorityFilter>) {
      state.priorityFilter = action.payload;
    },
  },
});

export const {
  AddTodo,
  setDelete,
  updateTodo,
  setToggle,
  setFilter,
  setPriorityFilter,
} = TodoSlice.actions;

export default TodoSlice.reducer;
