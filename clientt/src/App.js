import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import NewPostForm from "./components/NewPostForm";

import "./App.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Route path="/" component={HomePage} />
      <Route path="/new" component={NewPostForm} />
    </Router>
  );
};

export default App;
