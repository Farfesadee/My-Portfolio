import React, { useState, useRef, useEffect } from "react";
import { useProjects } from "../hooks/useProjects";

// Categories derived from current projects
function getCategories(projects) {
  return ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech || [])))];
}

export default function Projects() {
  const { projects } = useProjects();
  const [activeCategory, setActiveCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const categories = getCategories(projects);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => (p.tech || []).includes(activeCategory));

  const length = filteredProjects.length;

  useEffect(() => {
    if (length === 0) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, length]);

  // Reset index when category changes or projects change
  useEffect(() => {
    setIndex(0);
  }, [activeCategory, projects.length]);

  const goPrev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));

  const current = filteredProjects[index];

  return (
    <section className="py-24 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-green-400 font-medium tracking-widest uppercase text-sm mb-3">What I've Built</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Projects</h1>
          <p className="mt-3 text-gray-400 max-w-xl">
            A collection of {projects.length} projects across web development, AI, and full-stack applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-green-500 text-gray-900 shadow-lg shadow-green-500/25"
                  : "bg-gray-800 border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            No projects found for "{activeCategory}".
          </div>
        ) : (
          <>
            {/* Main Slider Card */}
            <div className="relative bg-gray-800/60 border border-gray-700/60 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {filteredProjects.map((p) => (
                  <div key={p.id} className="min-w-full flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-1/2 w-full h-56 md:h-auto bg-gray-700/50">
                      {p.img ? (
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <span className="text-6xl mb-3">🖥️</span>
                          <span className="text-gray-500 text-sm">{p.title}</span>
                        </div>
                      )}
                      {/* Nav Arrows */}
                      <button
                        onClick={goPrev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 text-white text-xl flex items-center justify-center hover:bg-gray-900 backdrop-blur-sm transition-all"
                      >
                        ‹
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 text-white text-xl flex items-center justify-center hover:bg-gray-900 backdrop-blur-sm transition-all"
                      >
                        ›
                      </button>
                      {/* Counter */}
                      <div className="absolute bottom-3 right-4 bg-gray-900/80 text-gray-300 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {index + 1} / {length}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 w-full p-7 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                        <p className="mt-3 text-gray-400 leading-relaxed">{p.description}</p>

                        {/* Tech Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(p.tech || []).map((t, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* README section */}
                        {p.readme?.overview && (
                          <div className="mt-6 border-t border-gray-700 pt-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              Project Overview
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">{p.readme.overview}</p>

                            {Array.isArray(p.readme.features) && p.readme.features.length > 0 && (
                              <ul className="mt-3 space-y-1">
                                {p.readme.features.map((f, i) => (
                                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {p.readme.highlights && (
                              <p className="mt-3 text-xs text-gray-500 italic">
                                💡 {p.readme.highlights}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex gap-3 flex-wrap">
                        {p.repo_url && (
                          <a
                            href={p.repo_url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            View Code
                          </a>
                        )}
                        {p.live_url && (
                          <a
                            href={p.live_url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-green-500/25"
                          >
                            ↗ Live Preview
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot navigation */}
            <div className="mt-5 flex justify-center gap-2">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 h-2.5 bg-green-500"
                      : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
