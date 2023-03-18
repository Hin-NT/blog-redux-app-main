import { createSlice, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../utils/http";

const initialState = {
  blogList: [],
  loading: false,
  blogEdit: null,
};

const postReducer = createSlice({
  name: "blogList",
  initialState,
  reducers: {
    editBlog: (state, action) => {
      const getBlogByID =
        state.blogList.find((blog) => blog.id === action.payload) || null;
      state.blogEdit = getBlogByID;
    },
    cancelEdigBlog: (state) => {
      state.blogEdit = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.blogList = action.payload;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blogList.push(action.payload);
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        const newBlogList = state.blogList.filter(
          (blog) => blog.id != action.payload
        );
        state.blogList = newBlogList;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blogList.find((blog, index) => {
          if (blog.id === action.payload.id) {
            state.blogList[index] = action.payload;
            return true;
          }
          return false;
        });
        state.blogEdit = null;
      })
      .addMatcher(
        // pending: khi đang chờ dữ liệu về
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher(
        //rejected: sau khi lấy dữ liệu xong nhưng thất bại
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
        //fulfilled: sau khi lấy dữ liệu xong và thành công
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
// xử lí bất đồng bộ
export const getBlogList = createAsyncThunk(
  "blogs/getBlogList",
  async (_, thunkAPI) => {
    const response = await http.get("posts", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
export const addBlog = createAsyncThunk(
  "blogs/addBlog",
  async (body, thunkAPI) => {
    const response = await http.post("posts", body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, thunkAPI) => {
    const response = await http.delete(`posts/${id}`, {
      signal: thunkAPI.signal,
    });
    return id;
  }
);
export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async (body, thunkAPI) => {
    const response = await http.put(`posts/${body.id}`, body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
export default postReducer;
