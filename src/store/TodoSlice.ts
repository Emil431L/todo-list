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
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    AddTodo(state) {
      if (state.input.trim()) {
        state.list.push({
          id: nanoid(),
          text: state.input,
          completed: false,
          priority: state.priority
        });
        state.input = '';
      }
    },
    setDelete(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action: PayloadAction<string>) {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        state.isEditing = true;
        state.currentId = todo.id;
        state.input = todo.text;
      }
    },
    updateTodo(state) {
      if (state.input.trim() && state.currentId !== null) {
        const todo = state.list.find((t) => t.id === state.currentId);
        if (todo) {
          todo.text = state.input;
          todo.priority = state.priority;
          state.input = '';
          state.isEditing = false;
          state.currentId = null;
        }
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

    setPriority(state, action: PayloadAction<'low' | 'medium' | 'high'>) {
      state.priority = action.payload
    },

    setPriorityFilter(state, action: PayloadAction<'all' | 'low' | 'medium' | 'high'>) {
      state.priorityFilter = action.payload
    }
  },
});

export const {
  setInput,
  AddTodo,
  setDelete,
  editTodo,
  updateTodo,
  setToggle,
  setFilter,
  setPriority,
  setPriorityFilter
} = TodoSlice.actions;

export default TodoSlice.reducer;
