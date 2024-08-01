import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

// Fetching  data from  backend
axios
  .get("http://localhost:6000/api/products")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error fetching data:", error));

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
