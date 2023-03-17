import React from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import EmptyList from "../../components/common/EmptyList";
import { blogList } from "../../config/data";
import { useState } from "react";
import CreatePost from "../../components/Home/CreatePost";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  //Search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResult();
  };
  // Search for blogs ny categorys
  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category
        .toLocaleLowerCase()
        .includes(searchKey.toLocaleLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  const handleClearnSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Header  */}
      <CreatePost />
      {/* Creater Post*/}
      <SearchBar
        value={searchKey}
        clearnSearch={handleClearnSearch}
        formSubmit={(e) => handleSearchSubmit(e)}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty List  */}
      {!blogs.length ? <EmptyList /> : <BlogList />}
    </div>
  );
};
export default Home;
