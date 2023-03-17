import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import "./styles.css";
import {
  loadingSelector,
  blogListSelector,
} from "../../../redux/post.selector";
import { getBlogList } from "../../../redux/post.reducer";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "../Skeleton";

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = dispatch(getBlogList());
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  const postList = useSelector(blogListSelector);
  const loading = useSelector(loadingSelector);
  return (
    <div className="blogList-wrap">
      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        postList.map((blog) => <BlogItem blog={blog} key={blog.id} />)
      )}
    </div>
  );
};
export default BlogList;
