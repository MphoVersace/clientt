import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../index.css";

// Import images
import Image from "./assets/pic1.webp";
import Image2 from "./assets/Pic2.webp";
import Image3 from "./assets/pic3.webp";
import Image4 from "./assets/Pic4.webp";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:4000/api/posts/${id}/comments`, {
        text: newComment,
      });
      setNewComment("");
      const response = await axios.get(`http://localhost:4000/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!post) return <p>Loading...</p>;

  // Use imported images based on post ID or other criteria
  const postImage =
    post.id === "4"
      ? Image4
      : post.id === "3"
      ? Image3
      : post.id === "2"
      ? Image2
      : post.imageUrl
      ? post.imageUrl
      : Image;

  return (
    <div className="container post-detail">
      <h1>{post.title}</h1>
      <img src={postImage} alt={post.title} />
      <p>{post.content}</p>
      <div className="comments">
        <h2>Comments</h2>
        <ul>
          {post.comments &&
            post.comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
        </ul>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default Post;
