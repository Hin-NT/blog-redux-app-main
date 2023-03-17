import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post.reducer";
const store = configureStore({
  reducer: {
    blogList: postReducer.reducer,
  },
});
export default store;
