import React, { useState } from "react";
import { Link } from "react-router-dom";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-700/50 fixed top-0 left-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white hover:text-green-400 transition-colors duration-200">
          Odushile<span className="text-green-400">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-gray-300 font-medium">
          <Link to="/" className="hover:text-green-400 transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition-colors duration-200">About</Link>
          <Link to="/skills" className="hover:text-green-400 transition-colors duration-200">Skills</Link>
          <Link to="/projects" className="hover:text-green-400 transition-colors duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-green-400 transition-colors duration-200">Contact</Link>
        </div>

        {/* Right side: Social Icons + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Farfesadee?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/omodolapo-odushile-8a9494383"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-2 bg-green-500 hover:bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-md shadow-green-500/20"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${open ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 pb-6 pt-4 flex flex-col gap-4 text-gray-300 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-400 transition-colors duration-200">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-green-400 transition-colors duration-200">About</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="hover:text-green-400 transition-colors duration-200">Skills</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-green-400 transition-colors duration-200">Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-green-400 transition-colors duration-200">Contact</Link>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-700">
            <a
              href="https://github.com/Farfesadee?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/omodolapo-odushile-8a9494383"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-green-500 hover:bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
