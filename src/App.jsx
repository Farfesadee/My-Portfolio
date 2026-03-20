import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import ChatbotWidget from "./components/ChatbotWidget";

// Silently wake the backend on app load so it's ready when needed
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
function useWakeBackend() {
  useEffect(() => {
    fetch(`${API_BASE}/`, { method: "GET" }).catch(() => {});
  }, []);
}

function App() {
  useWakeBackend();

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
      <ChatbotWidget />
    </Router>
  );
}

export default App;
