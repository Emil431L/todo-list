import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  list: [],
  isEditing: false,
  currentIndex: null,
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
      };
      if (state.input.trim()) {
        state.list.push(newTodo);
        state.input = "";
      }
    },
    setDelete(state, action) {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
    },
    removeTodo(state, action) {
      const id = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        state.isEditing = true;
        state.currentIndex = id;
        state.input = todo.text;
      }
    },
    updateTodo(state) {
      if (state.input.trim() && state.currentIndex !== null) {
        const Todos = state.list.find((todo) => todo.id === state.currentIndex);
        if (Todos) {
          Todos.text = state.input;
          state.isEditing = false;
          state.currentIndex = null;
          state.input = "";
        }
      }
    },
  },
});

export const { setInput, addTodo, setDelete, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
