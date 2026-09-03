// src/redux/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.id !== action.payload.id);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        const index = state.items.findIndex(i => i.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

