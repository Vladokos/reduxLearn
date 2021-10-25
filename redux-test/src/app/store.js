import { configureStore } from "@reduxjs/toolkit";
import changeText from "../features/changeText/changeText";

export default configureStore({
  reducer: {
    changer: changeText,
  },
});
