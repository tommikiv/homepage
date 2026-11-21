import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className={`navbar ${isAboutPage ? "navbar-light" : ""}`}>
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
