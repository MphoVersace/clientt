import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/posts", { title, content })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div className="new-post-form-container">
      <h2 className="form-title">Create New Post</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="form-input"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="form-textarea"
          required
        />
        <button type="submit" className="form-button">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
