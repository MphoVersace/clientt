import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="container posts-grid">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
