import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center">
      <h1 style={{ fontSize: 96, margin: 0, opacity: 0.2 }}>404</h1>
      <h2>Page not found</h2>
      <p className="muted">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">
        ← Back to all courses
      </Link>
    </div>
  );
}
