import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "150px", height: "auto" }} // Adjust width and height as needed
              />
              <p>{post.content}</p>
              <h3>Comments:</h3>
              <ul>
                {post.comments.map((comment) => (
                  <li key={comment.id}>{comment.text}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
