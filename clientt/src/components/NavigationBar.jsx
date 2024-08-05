import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="eating">Eating Well</h1>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/new">New Post</Link>
    </nav>
  );
};

export default NavBar;
