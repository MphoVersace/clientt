import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

// Fetching  data from  backend
axios
  .get("http://localhost:4000/api/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error fetching data:", error));

const apiUrl = process.env.REACT_APP_API_URL;
fetch(`${apiUrl}/products`)
  .then((response) => response.json())
  .then((data) => console.log(data));

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
