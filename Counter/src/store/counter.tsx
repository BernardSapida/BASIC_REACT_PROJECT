import { createSlice } from "@reduxjs/toolkit";

const counterState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
