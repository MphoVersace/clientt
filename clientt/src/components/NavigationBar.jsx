import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="eating">Eating Well</h1>
      <Link to="/">Home</Link>
      <Link to="/">Post</Link>
      <Link to="/new">New Post</Link>
    </nav>
  );
};

export default NavBar;
