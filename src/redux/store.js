// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});

