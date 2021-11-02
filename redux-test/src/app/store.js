import { configureStore } from "@reduxjs/toolkit";

import postsReucer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReucer,
    users: usersReducer,
  },
});
