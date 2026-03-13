import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function About() {
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animate = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count === target) clearInterval(interval);
      }, 60);
    };
    animate(setProjects, 10);
    animate(setYears, 2);
    animate(setClients, 5);
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <p className="text-green-400 font-medium tracking-widest uppercase text-sm mb-3">Get to Know Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
        </div>

        {/* TOP — IMAGE + INTRO */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* IMAGE */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent rounded-2xl blur-xl scale-110 pointer-events-none" />
              <img
                src={profile}
                alt="Omodolapo Odushile"
                className="relative w-72 h-80 object-cover object-top rounded-2xl shadow-2xl border border-gray-700/50"
              />
            </div>
          </div>

          {/* INTRO TEXT */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">
              I'm <span className="text-green-400">Omodolapo Odunayo Odushile</span>
            </h2>
            <p className="mt-2 text-green-400 font-medium">Full-Stack Developer & AI/ML Developer</p>

            <p className="mt-5 text-gray-300 leading-relaxed">
              I am passionate about building clean, scalable, and intelligent software solutions.
              I work with modern tools like{" "}
              <span className="text-green-400 font-medium">React, TailwindCSS, Python, FastAPI, and MySQL</span>{" "}
              to deliver seamless user experiences backed by reliable backend systems.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              My work spans static websites, database systems, authentication platforms,
              AI-powered applications, and full-stack products used by real clients.
              I enjoy solving complex problems and turning ideas into impactful digital products.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold bg-green-500 text-gray-900 shadow-lg shadow-green-500/25 hover:bg-green-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                View CV
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl font-semibold border border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Download CV
              </a>
              <a
                href="https://github.com/Farfesadee?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/omodolapo-odushile-8a9494383"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl font-semibold bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* COUNTERS */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: projects, label: "Completed Projects" },
            { value: years, label: "Years of Experience" },
            { value: clients, label: "Clients Worked With" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-800/60 border border-gray-700/60 p-8 rounded-2xl shadow-xl hover:border-green-500/30 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-green-400">{item.value}+</h3>
              <p className="text-gray-400 mt-3 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* VALUES SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-2">My Values</h2>
          <p className="text-center text-gray-400 mb-12">The principles that drive my work.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Growth", desc: "I learn fast, adapt quickly, and stay updated with the latest tools and technologies." },
              { icon: "✨", title: "Simplicity", desc: "I build clean, intuitive, and user-friendly products — no unnecessary complexity." },
              { icon: "🎯", title: "Impact", desc: "I aim to build solutions that solve real human problems and deliver measurable value." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800/60 border border-gray-700/60 p-6 rounded-2xl hover:border-green-500/30 transition-all duration-300 group"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white mt-3 group-hover:text-green-400 transition-colors">{item.title}</h3>
                <p className="mt-2 text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-2">My Workflow</h2>
          <p className="text-center text-gray-400 mb-12">How I approach every project.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Understand", desc: "Analyze the problem and user needs deeply." },
              { step: "02", label: "Design", desc: "Plan structure, UI, and optimal user flow." },
              { step: "03", label: "Build", desc: "Write clean, scalable, and efficient code." },
              { step: "04", label: "Improve", desc: "Refine UX, performance, and functionality." },
            ].map((w) => (
              <div
                key={w.step}
                className="bg-gray-800/60 border border-gray-700/60 p-6 rounded-2xl text-center hover:border-green-500/30 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-green-500/30">{w.step}</p>
                <p className="font-semibold text-white mt-2">{w.label}</p>
                <p className="mt-2 text-gray-400 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Experience</h2>
          <div className="border-l-2 border-green-500/40 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900" />
              <h3 className="text-xl font-semibold text-white">Full-Stack Developer</h3>
              <p className="text-green-400 text-sm mt-1">2025 — Present</p>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Building full-stack applications using React, FastAPI, and MySQL; working with clients to bring digital ideas to life.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-green-500/60 border-2 border-gray-900" />
              <h3 className="text-xl font-semibold text-white">Web Developer — Project Based</h3>
              <p className="text-green-400 text-sm mt-1">2024 — Present</p>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Developed websites, dashboards, and digital solutions for small businesses and student programs.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Education</h2>
          <div className="bg-gray-800/60 border border-gray-700/60 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white">Bachelor of Science [B.Sc.(Ed.)] — Mathematics</h3>
            <p className="text-green-400 mt-1">2018 — 2023</p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-16 pb-10">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Certifications</h2>
          <div className="space-y-4">
            {[
              "Full-Stack Web Development — React + Python + FastAPI",
              "AI & Machine Learning Foundations",
            ].map((cert) => (
              <div
                key={cert}
                className="bg-gray-800/60 border border-gray-700/60 p-5 rounded-2xl flex items-center gap-4 hover:border-green-500/30 transition-all duration-200"
              >
                <span className="text-green-400 text-xl">🎓</span>
                <p className="text-gray-200 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
