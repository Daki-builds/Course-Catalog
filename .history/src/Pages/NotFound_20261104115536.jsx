import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center">
      <h1 className="big-404">404</h1>
      <h2>Page not found</h2>
      <p className="muted">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn">
        ← Back to all courses
      </Link>
    </div>
  );
}
