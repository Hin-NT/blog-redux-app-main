//.selector Lấy dữ liệu lên từ store
import { createSelector } from "reselect";

export const blogListSelector = (state) => state.blogList.blogList;
export const loadingSelector = (state) => state.blogList.loading;
