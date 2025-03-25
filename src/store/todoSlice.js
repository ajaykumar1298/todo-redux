import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    todoAdd: (state, action) => {
      let todo = {
        id: uuidv4(),
        text: action.payload,
        done: false,
      };
      state.todos = [...state.todos, todo];
    },
    todoUpdate: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    todoRemove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    todoDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? { ...todo, done: !action.payload.done } : todo
      );
    },
  },
});
let todoReducer = todoSlice.reducer;
export default todoReducer;

export let { todoAdd, todoUpdate, todoRemove, todoDone } = todoSlice.actions;
