import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";   // <-- Add this
import Projects from "./pages/Projects"; // If Projects is a page
import Admin from "./pages/Admin";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />   {/* <-- Add this */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
