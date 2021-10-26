import { createSlice } from "@reduxjs/toolkit";

export const changeText = createSlice({
  name: "message",
  initialState: {
    text: "Secret message",
  },
  reducers: {
    decrypt: (state) => {
      state.text = "Hello world!";
    },
    encrypt: (state) => {
      state.text = "Secret message";
    }
  },
});
export const { decrypt, encrypt } = changeText.actions;

export default changeText.reducer;
