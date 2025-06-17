import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export enum Filter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high'
}

interface TodoState {
  input: string;
  list: Todo[];
  isEditing: boolean;
  currentId: string | null;
  filter: Filter;
  priority: 'low' | 'medium' | 'high'
  priorityFilter: 'all' | 'low' | 'medium' | 'high'
}

const initialState: TodoState = {
  input: '',
  list: [],
  isEditing: false,
  currentId: null,
  filter: Filter.All,
  priority: 'low',
  priorityFilter: 'all'
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    AddTodo(state, action: PayloadAction<Pick<Todo, 'text' | 'priority'>>) {
      state.list.push({
        id: nanoid(),
        text: action.payload.text,
        completed: false,
        priority: action.payload.priority
      });
      state.input = '';
    },
    setDelete(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    
    updateTodo(state, action: PayloadAction<{id: string, text: string, priority: 'low' | 'medium' | 'high'}>) {
      const todo = state.list.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.priority = action.payload.priority;
        state.isEditing = false;
        state.currentId = null;
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
    setPriorityFilter(state, action: PayloadAction<'all' | 'low' | 'medium' | 'high'>) {
      state.priorityFilter = action.payload
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
