import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  list: [],
  isEditing: false,
  currentId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    addTodo(state) {
      const newTodo = {
        id: nanoid(),
        text: state.input,
        createdAt: new Date().toISOString(),
        completed: false, 
      };
      if (state.input.trim()) {
        state.list.push(newTodo);
        state.input = "";
      }
    },
    setDelete(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        state.isEditing = true;
        state.currentId = todo.id;
        state.input = todo.text;
      }
    },
    updateTodo(state) {
      if (state.input.trim() && state.currentId !== null) {
        const todo = state.list.find((todo) => todo.id === state.currentId);
        if (todo) {
          todo.text = state.input;
          state.isEditing = false;
          state.currentId = null;
          state.input = "";
        }
      }
    },
    toggleComplete(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {
  setInput,
  addTodo,
  setDelete,
  editTodo,
  updateTodo,
  toggleComplete, 
} = todoSlice.actions;
export default todoSlice.reducer;
