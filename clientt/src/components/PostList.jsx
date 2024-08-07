import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PostList.css";

import Image from "./assets/pic1.webp";
import Image2 from "./assets/Pic2.webp";
import Image3 from "./assets/pic3.webp";
import Image4 from "./assets/Pic4.webp";

const imageMap = {
  pic1: Image,
  Pic2: Image2,
  pic3: Image3,
  Pic4: Image4,
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container posts-grids">
      {posts.map((post) => (
        <div key={post.id} className="postsss">
          <h3>{post.title}</h3>
          <div className="post-imagesss">
            <img
              src={imageMap[post.imageUrl] || Image}
              alt={post.title}
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
