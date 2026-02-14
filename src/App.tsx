import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,           // smoothness
      duration: 1.2,        // scroll duration
      wheelMultiplier: 1,   // scroll speed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
