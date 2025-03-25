import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

let store = configureStore({
  reducer: todoReducer,
});
export default store;
