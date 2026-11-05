import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

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
