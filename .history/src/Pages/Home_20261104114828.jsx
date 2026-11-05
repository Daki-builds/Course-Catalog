import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">TechyJaunt Cohort 8</p>
        <h1>
          Learn at your <br /> own pace.
        </h1>
        <p className="intro">
          Everything from HTML basics to advanced React patterns — structured,
          practical, and beginner-friendly.
        </p>
      </section>

      <div className="section-head">
        <h2>
          All Courses <span className="count">({courses.length})</span>
        </h2>
      </div>

      <div className="grid">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </>
  );
}