import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import NewPostForm from "./components/NewPostForm";

import "./index.css";
import "../App.css;";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPostForm />} />
      </Routes>
    </Router>
  );
};

export default App;
