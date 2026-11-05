import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        TJ <span>Courses</span>
      </Link>
      <NavLink to="/" end className={linkClass}>
        All Courses
      </NavLink>
      <NavLink to="/category/Beginner" className={linkClass}>
        Beginner
      </NavLink>
      <NavLink to="/category/Intermediate" className={linkClass}>
        Intermediate
      </NavLink>
    </nav>
  );
}
