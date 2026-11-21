import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Tommikiv</h1>
      </Link>

      <div className="nav-links">
        <a href="#">Feed</a>
        <a href="#">Projects</a>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
