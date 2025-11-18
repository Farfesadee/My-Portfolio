import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-white">Odushile O. Omodolapo</h2>
          <p className="mt-3 text-gray-400">
            Full-Stack Web Developer & AI Developer
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/skills" className="hover:text-white">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            {/* <li><Link to="/experience" className="hover:text-white">Experience</Link></li> */}
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">📞 Phone: +234-810-114-3265</p>
          <a 
            href="https://wa.me/2348101143265" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-white block mt-2"
          >
            💬 WhatsApp
          </a>
          <a 
            href="mailto:odushileomodolapo1995@gmail.com" 
            className="text-gray-400 hover:text-white block mt-2"
          >
            ✉️ Email Me
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center relative">

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 -top-4 bg-white text-gray-900 px-3 py-1 rounded shadow hover:bg-gray-200 cursor-pointer"
        >
          ↑ Top
        </button>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Omodolapo Odunayo Odushile. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
