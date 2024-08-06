import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../index.css";

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

  return (
    <div className="container post-detail">
      <h1>{post.title}</h1>
      <img
        src={post.imageUrl}
        alt={post.title}
        onError={(e) => {
          e.target.onerror = null; // prevents infinite loop if fallback also fails
          e.target.src = "path/to/fallback-image.jpg"; // replace with the path to a local fallback image
          console.error("Image failed to load:", post.imageUrl);
        }}
      />
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
