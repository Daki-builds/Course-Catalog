import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import CourseDetail from "./Pages/CourseDetail";
import Category from "./Pages/Category";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
