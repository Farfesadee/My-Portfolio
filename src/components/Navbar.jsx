import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900 transition-colors">
          Odushile O. Omodolapo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-gray-900 hover:underline underline-offset-8 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-900 hover:underline underline-offset-8 transition">About</Link>
          <Link to="/skills" className="hover:text-gray-900 hover:underline underline-offset-8 transition">Skills</Link>
          <Link to="/projects" className="hover:text-gray-900 hover:underline underline-offset-8 transition">Projects</Link>
          {/* <Link to="/experience" className="hover:text-gray-900">Experience</Link> */}
          <Link to="/contact" className="hover:text-gray-900 hover:underline underline-offset-8 transition">Contact</Link>
          <Link to="/admin" className="hover:text-gray-900 hover:underline underline-offset-8 transition">Admin</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button 
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition ${open ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">About</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">Skills</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">Projects</Link>
          {/* <Link to="/experience" onClick={() => setOpen(false)} className="hover:text-gray-900">Experience</Link> */}
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">Contact</Link>
          <Link to="/admin" onClick={() => setOpen(false)} className="hover:text-gray-900 hover:underline underline-offset-8 transition">Admin</Link>
        </div>
      )}
    </nav>
  );
}
