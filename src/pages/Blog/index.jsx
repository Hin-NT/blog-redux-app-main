import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import { blogListSelector } from "../../redux/post.selector";
import { useSelector } from "react-redux";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const postList = useSelector(blogListSelector);
  console.log(postList);
  console.log(id);

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span>&#8592;</span>Go Back
      </Link>
      {postList.map((post) => {
        if (String(post.id) === id) {
          console.log("CO");
          return (
            <div className="blog-wrap">
              <header>
                <p className="blog-date">Published {post.createAt}</p>
                <h1>{post.title}</h1>
                <div className="blog-subCategory">
                  {post.subCategory.map((category) => (
                    <div>
                      <Chip key={post.id} label={category} />
                    </div>
                  ))}
                </div>
              </header>
              <img src={post.cover} alt="cover" />
              <p className="blog-desc">{post.description}</p>
            </div>
          );
        }
      })}
      {/* {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )} */}
    </div>
  );
};
export default Blog;
