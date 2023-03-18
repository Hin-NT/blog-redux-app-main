import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import postReducer, { addBlog, updateBlog } from "../../../redux/post.reducer";
import { editBlogSelector } from "../../../redux/post.selector";
const CreaterPost = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const blogEdit = useSelector(editBlogSelector);
  console.log(blogEdit);
  const defaultValue = {
    title: "",
    category: "",
    subCategory: "",
    description: "",
    authorName: "Jone Doe",
    authorAvatar:
      "https://images.pexels.com/photos/1646178/pexels-photo-1646178.jpeg?auto=compress&cs=tinysrgb&w=600",
    createAt: date.toLocaleString(),
    cover: "",
  };
  useEffect(() => {
    if (blogEdit != null) {
      setPost({
        ...blogEdit,
        subCategory: blogEdit.subCategory.join(","),
      });
    } else {
      setPost(defaultValue);
    }
  }, [blogEdit]);
  const [post, setPost] = useState(defaultValue);
  const handleAddPost = (e) => {
    e.preventDefault();
    const customPost = {
      ...post,
      subCategory: post.subCategory.split(","),
    };
    setPost(defaultValue);
    dispatch(addBlog(customPost));
  };
  const handleCancelEdit = () => {
    dispatch(postReducer.actions.cancelEdigBlog());
  };
  const handleUpdateBlog = () => {
    const customPost = {
      ...post,
      subCategory: post.subCategory.split(","),
    };
    console.log(customPost);
    dispatch(updateBlog(customPost));
  };
  return (
    <form onSubmit={(e) => handleAddPost(e)}>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Title..."
          value={post.title}
          required
          onChange={(e) =>
            setPost({
              ...post,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          id="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Category..."
          value={post.category}
          required
          onChange={(e) =>
            setPost({
              ...post,
              category: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          SubCategory
        </label>
        <input
          type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="SubCategory..."
          value={post.subCategory}
          required
          onChange={(e) =>
            setPost({
              ...post,
              subCategory: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Description..."
          value={post.description}
          required
          onChange={(e) =>
            setPost({
              ...post,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Cover
        </label>
        <input
          type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Cover..."
          value={post.cover}
          required
          onChange={(e) =>
            setPost({
              ...post,
              cover: e.target.value,
            })
          }
        />
      </div>
      {blogEdit != null ? (
        <>
          <button
            onClick={handleUpdateBlog}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-4"
          >
            Update Blog
          </button>
          <button
            onClick={handleCancelEdit}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-4"
          >
            Cancel Edit
          </button>
        </>
      ) : (
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4"
        >
          Add New Blog
        </button>
      )}
    </form>
  );
};
export default CreaterPost;
