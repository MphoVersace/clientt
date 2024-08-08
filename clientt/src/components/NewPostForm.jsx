import React, { useState } from "react";
import axios from "axios";

const NewPostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "https://blog-platform-8a1k.onrender.com/posts",
        {
          title,
          content,
          image: imageUrl,
        }
      );
      if (onPostCreated) {
        onPostCreated(response.data); // Call the callback with the new post data
      }
      setTitle("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      setError(
        "Error creating post: " + error.response?.data?.errors?.[0]?.msg ||
          error.message
      );
    }
  };

  return (
    <div className="container create-post">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default NewPostForm;
