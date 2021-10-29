import { configureStore } from "@reduxjs/toolkit";

import postsReucer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReucer,
  },
});
