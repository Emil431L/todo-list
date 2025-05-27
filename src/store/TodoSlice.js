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
    editTodo(state, action) {
      const id = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        state.isEditing = true;
        state.currentId = id;
        state.input = todo.text;
      }
    },
    updateTodo(state) {
      if (state.input.trim() && state.currentIndex !== null) {
        const Todos = state.list.find((todo) => todo.id === state.currentId);
        if (Todos) {
          Todos.text = state.input;
          state.isEditing = false;
          state.currentId = null;
          state.input = "";
        }
      }
    },
  },
});

export const { setInput, addTodo, setDelete, editTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
