import { createSlice, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../utils/http";

const initialState = {
  blogList: [],
  loading: false,
};

const postReducer = createSlice({
  name: "blogList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.blogList = action.payload;
      })
      .addMatcher(
        // khi đang chờ dữ liệu về
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          if (
            state.loading &&
            state.currentRequestId === action.meta.requestId
          ) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          if (
            state.loading &&
            state.currentRequestId === action.meta.requestId
          ) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      );
  },
});
export const getBlogList = createAsyncThunk(
  "blogs/getBlogList",
  async (_, thunkAPI) => {
    const response = await http.get("posts", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
export default postReducer;
