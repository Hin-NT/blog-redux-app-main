import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span>&#8592;</span>Go Back
      </Link>

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
