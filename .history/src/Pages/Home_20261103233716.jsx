import { courses } from "../data/courses";
import CourseCard from "../Components/CourseCard";

export default function Home() {
  return (
    <>
      <h1>Learn to build for the web</h1>
      <p className="muted">
        Browse our catalog and pick a course to get started.
      </p>
      <div className="grid">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </>
  );
}
