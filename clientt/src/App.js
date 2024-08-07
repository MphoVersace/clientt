import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import PostList from "./components/PostList"; // Import the updated PostList component
import "./index.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPostForm />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/posts" element={<PostList />} />{" "}
        {/* Update route to use PostList */}
      </Routes>
    </Router>
  );
};

export default App;
