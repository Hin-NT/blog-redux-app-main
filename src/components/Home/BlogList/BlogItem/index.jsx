import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="cover" className="blogItem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          {"->"}
        </Link>
      </footer>
    </div>
  );
};
export default BlogItem;
