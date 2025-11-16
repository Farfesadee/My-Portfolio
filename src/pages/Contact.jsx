// src/components/Contact.jsx

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Contact
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Interested in a project, collaboration, or just want to say hello?
          You can reach me via email, phone, or WhatsApp.
        </p>

        {/* Email Button */}
        <a
          href="mailto:odushileomodolapo1995@gmail.com"
          className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          {/* Email SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
          </svg>

          Send Me an Email
        </a>

        <div className="mt-10 space-y-5 text-lg text-gray-700">

          {/* Phone */}
          <div className="flex justify-center items-center gap-3">
            {/* Phone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M3 5l2-2 4 4-2 2a12 12 0 006 6l2-2 4 4-2 2c-3.2 1.4-11-6.4-12.4-9.6z"
              />
            </svg>

            <span>+234 810 114 3265</span>
          </div>

          {/* WhatsApp */}
          <div className="flex justify-center items-center gap-3">
            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-green-600"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 3a13 13 0 00-11 20l-2 6 6-2A13 13 0 1016 3zm0 4a9 9 0 110 18 9 9 0 010-18zm4.8 11.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1c-.2.2-.7.8-.9 1-.2.2-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.3.1-.5l.7-.8c.1-.2.1-.3 0-.5l-1-2.4c-.2-.6-.4-.6-.6-.6h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.5 1 2.9 1.1 3.1c.1.2 2 3.3 4.9 4.6 2.9 1.4 2.9.9 3.4.8.5-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4z" />
            </svg>

            <a
              href="https://wa.me/2348100000000"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-gray-800"
            >
              WhatsApp Chat
            </a>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-8">

          {/* GitHub */}
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 008 11c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.8 1.7.8 2 .3 3.4-.7 3.4-.7-.1-.8-.2-1.4-.2-1.4-2.3-.3-4.7-1.2-4.7-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 1.1a9.6 9.6 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.4 5.1-4.7 5.4 0 .1-.1.7-.2 1.4 0 0 1.4 1 3.4.7 0 0 .7-.7 1.7-.8 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.4-1.2 1.6 0 0-.7 2.3-4 1.6v2c0 .4.2.7.8.6a11.5 11.5 0 008-11c0-6.3-5.2-11.5-11.5-11.5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V24h-4V7zm7 0h4v2.4h.1c.6-1.2 2-2.4 4.2-2.4 4.5 0 5.3 3 5.3 6.9V24h-4V14.4c0-2.3 0-5.3-3.2-5.3-3.2 0-3.7 2.5-3.7 5.1V24h-4V7z" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}
