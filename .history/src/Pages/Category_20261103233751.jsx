import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../Components/CourseCard";

export default function Category() {
  const { category } = useParams();
  const matched = courses.filter(
    (c) => c.category.toLowerCase() === category.toLowerCase(),
  );

  if (matched.length === 0) {
    return (
      <div className="center">
        <h1>No courses found</h1>
        <p className="muted">There are no courses in "{category}".</p>
        <Link to="/" className="btn">
          ← Back to all courses
        </Link>
      </div>
    );
  }

  const heading = matched[0].category;

  return (
    <>
      <h1>{heading} Courses</h1>
      <p className="muted">
        {matched.length} {matched.length === 1 ? "course" : "courses"} matched
      </p>
      <div className="grid">
        {matched.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </>
  );
}
