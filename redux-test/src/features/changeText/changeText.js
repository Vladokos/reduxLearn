import { createSlice } from "@reduxjs/toolkit";

export const changeText = createSlice({
  name: "message",
  initialState: {
    text: "Secret message",
  },
  reducers: {
    change: (state) => {
      state.text = "Hello world!";
    },
  },
});
export const { change } = changeText.actions;

export default changeText.reducer;
