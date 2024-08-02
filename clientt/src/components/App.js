import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import NewPostForm from "./NewPostForm";
import Post from "./Post";

import "./App.css";
import "../styling/Post.css";
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Post />} />
        <Route path="/new" element={<NewPostForm />} />
      </Routes>
    </Router>
  );
};

export default App;
