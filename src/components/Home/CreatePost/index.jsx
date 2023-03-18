import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { addBlog } from "../../../redux/post.reducer";
const CreaterPost = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    category: "",
    subCategory: "",
    description: "",
    authorName: "Jone Doe",
    authorAvatar:
      "https://images.pexels.com/photos/1646178/pexels-photo-1646178.jpeg?auto=compress&cs=tinysrgb&w=600",
    createAt: date.toLocaleString(),
    cover: "",
  });
  const handleAddPost = (e) => {
    e.preventDefault();
    const customPost = {
      ...post,
      subCategory: post.subCategory.split(", "),
    };
    setPost({
      title: "",
      category: "",
      subCategory: "",
      description: "",
      authorName: "Jone Doe",
      authorAvatar:
        "https://images.pexels.com/photos/1646178/pexels-photo-1646178.jpeg?auto=compress&cs=tinysrgb&w=600",
      createAt: date.toLocaleString(),
      cover: "",
    });
    dispatch(addBlog(customPost));
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
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add New Blog
      </button>
    </form>
  );
};
export default CreaterPost;
