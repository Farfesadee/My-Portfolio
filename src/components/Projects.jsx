



import React, { useState, useRef, useEffect } from "react";
import foodie from "../assets/projects/foodie.png";
import expense from "../assets/projects/expense.JPG";
import tracker from "../assets/projects/tracker.JPG";
import drugs from "../assets/projects/drugs.png";
import facebook from "../assets/projects/facebook.JPG";

const projects = [
  {
    id: 1,
    title: "Foodie",
    description: "Turned a static restaurant design image into a responsive HTML & CSS website.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    live_url: "https://foodie.example.com",
    img: foodie,
    readme: {
      overview: "Responsive restaurant landing page built from a static design.",
      features: [
        "Mobile-first responsive layout",
        "Semantic HTML structure",
        "Clean CSS styling"
      ],
      highlights: "Demonstrates layout accuracy and responsiveness."
    }
  },
  {
    id: 2,
    title: "Python Calculator",
    description: "A simple Python calculator that performs basic operations.",
    tech: ["Python"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: "https://via.placeholder.com/720x420.png?text=Python+Calculator",
    readme: {
      overview: "Command-line calculator for basic arithmetic operations.",
      features: [
        "Addition, subtraction, multiplication, division",
        "Input validation",
        "Modular logic"
      ],
      highlights: "Shows Python fundamentals and problem-solving."
    }
  },
  {
    id: 3,
    title: "FreshBite Cafe",
    description: "Digital menu system allowing customers to order and staff to update easily.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "https://via.placeholder.com/720x420.png?text=FreshBite+Cafe",
    readme: {
      overview: "Interactive digital menu for restaurants.",
      features: [
        "Dynamic menu rendering",
        "Interactive UI elements",
        "Responsive design"
      ],
      highlights: "Demonstrates DOM manipulation and UI logic."
    }
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Browser-based system for librarians to manage books and check availability.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "https://via.placeholder.com/720x420.png?text=Library+System",
    readme: {
      overview: "Simple system for managing books and availability.",
      features: [
        "View and manage books",
        "CRUD-style interactions",
        "Clear UI workflow"
      ],
      highlights: "Shows structured JavaScript and CRUD logic."
    }
  },
  {
    id: 5,
    title: "Expense Tracker (React)",
    description: "Expense tracker with filters and state management.",
    tech: ["React"],
    repo_url: "https://github.com/Farfesadee/My_React/tree/master/Mini_Project_1",
    img: expense,
    readme: {
      overview: "Frontend expense tracker with real-time updates.",
      features: [
        "Add and delete expenses",
        "Category filtering",
        "React state management"
      ],
      highlights: "Demonstrates React hooks and component structure."
    }
  },
  {
    id: 6,
    title: "Expense Tracker (Fullstack)",
    description: "Auth-protected tracker synced with FastAPI + MySQL backend.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: tracker,
    readme: {
      overview: "Secure expense tracking with backend persistence.",
      features: [
        "User authentication",
        "API-based data storage",
        "Protected routes"
      ],
      highlights: "Shows fullstack architecture and auth flows."
    }
  },
  {
    id: 7,
    title: "Say No To Drugs",
    description: "Awareness website educating youth on drug abuse.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    live_url: "https://say-no-to-drug-abuse.vercel.app/",
    img: drugs,
    readme: {
      overview: "Awareness website focused on drug abuse education.",
      features: [
        "Informational content pages",
        "Responsive layout",
        "Clear messaging"
      ],
      highlights: "Demonstrates social impact and content-first design."
    }
  },
  {
    id: 8,
    title: "Facebook Clone",
    description: "Full-stack social app with signup, login & posting features.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: facebook,
    readme: {
      overview: "Social media application with core Facebook features.",
      features: [
        "User authentication",
        "Post creation",
        "Backend API integration"
      ],
      highlights: "Demonstrates complex fullstack workflows."
    }
  },
  {
    id: 9,
    title: "Nigerian State App",
    description: "Add, view, edit, delete states; backend with auth & state routes.",
    tech: ["React Router", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: "https://via.placeholder.com/720x420.png?text=Nigerian+State+App",
    readme: {
      overview: "Admin-style CRUD app for managing Nigerian states.",
      features: [
        "Full CRUD operations",
        "Protected routes",
        "API-driven data"
      ],
      highlights: "Shows routing and backend integration."
    }
  },
  {
    id: 10,
    title: "Profile Card (Tailwind)",
    description: "User profile card with stats, bio, and follow button.",
    tech: ["TailwindCSS"],
    repo_url: "https://github.com/Farfesadee/Learning_Tailwind_CSS.git",
    img: "https://via.placeholder.com/720x420.png?text=Profile+Card",
    readme: {
      overview: "Reusable profile card component with modern UI.",
      features: [
        "Responsive layout",
        "Utility-first styling",
        "Reusable component"
      ],
      highlights: "Demonstrates Tailwind and UI precision."
    }
  }
];

// Categories
const categories = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tech))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeCategory));

  const length = filteredProjects.length;

  useEffect(() => {
    if (length === 0) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearTimeout(timeoutRef.current);
  }, [index, length]);

  const goPrev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Projects</h2>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filteredProjects.map((p) => (
              <div key={p.id} className="min-w-full flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-1/2 w-full h-56 md:h-auto">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <button onClick={goPrev} className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-900 bg-opacity-80 text-white text-xl">‹</button>
                  <button onClick={goNext} className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-900 bg-opacity-80 text-white text-xl">›</button>
                </div>

                {/* Content */}
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{p.title}</h3>
                    <p className="mt-3 text-gray-600">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t, i) => (
                        <span key={i} className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* README */}
                    <div className="mt-6 border-t pt-4">
                      <p className="text-sm text-gray-700 font-semibold mb-2">
                        Project Overview
                      </p>

                      <p className="text-sm text-gray-600 mb-3">
                        {p.readme.overview}
                      </p>

                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {p.readme.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>

                      <p className="mt-3 text-xs text-gray-500">
                        <strong>Highlights:</strong> {p.readme.highlights}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    {p.repo_url && (
                      <a href={p.repo_url} target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md">
                        View Code
                      </a>
                    )}
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Live Preview
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 pb-4 flex justify-center gap-2">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-gray-900 scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
