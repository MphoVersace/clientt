import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">New Post</Link>
      <Link to="/">Post</Link>
    </nav>
  );
};

export default NavBar;
