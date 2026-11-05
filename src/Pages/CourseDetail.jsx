import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const course = courses.find((c) => c.slug === slug);

  // If the page was opened directly, there's no previous page, so go home
  const goBack = () =>
    location.key === "default" ? navigate("/") : navigate(-1);

  if (!course) {
    return (
      <div className="center">
        <h1 className="big-404">404</h1>
        <h2>Course not found</h2>
        <p className="muted">
          There's no course at this URL. The link might be wrong or the course
          may no longer exist.
        </p>
        <Link to="/" className="btn">
          ← Back to all courses
        </Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <button className="btn-outline" onClick={goBack}>
        ← Back
      </button>

      <div className="detail-badge">
        <span className={`badge ${course.category.toLowerCase()}`}>
          {course.category}
        </span>
      </div>

      <h1 className="detail-title">{course.title}</h1>
      <p className="muted detail-duration">⏱ {course.duration}</p>

      <div className="panel">{course.description}</div>

      <h2 className="topics-label">Topics covered</h2>
      <ul className="topics">
        {course.topics.map((t) => (
          <li key={t}>
            <span className="check">✓</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
