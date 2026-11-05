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
        <h1>Course not found</h1>
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
    <>
      <button className="btn-outline" onClick={goBack}>
        ← Back
      </button>

      <div style={{ marginTop: 24 }}>
        <span className={`badge ${course.category.toLowerCase()}`}>
          {course.category}
        </span>
      </div>

      <h1>{course.title}</h1>
      <p className="muted">⏱ {course.duration}</p>
      <p className="panel">{course.description}</p>

      <h2>Topics covered</h2>
      <ul className="topics">
        {course.topics.map((t) => (
          <li key={t}>✓ {t}</li>
        ))}
      </ul>
    </>
  );
}
