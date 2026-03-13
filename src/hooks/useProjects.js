import { useState, useEffect, useCallback } from "react";

// Default projects — pre-seeded from the hardcoded list
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Foodie",
    description: "Turned a static restaurant design image into a responsive HTML & CSS website.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    live_url: "https://foodie.example.com",
    img: "",
    readme: {
      overview: "Responsive restaurant landing page built from a static design.",
      features: ["Mobile-first responsive layout", "Semantic HTML structure", "Clean CSS styling"],
      highlights: "Demonstrates layout accuracy and responsiveness.",
    },
  },
  {
    id: 2,
    title: "Python Calculator",
    description: "A simple Python calculator that performs basic arithmetic operations.",
    tech: ["Python"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: "",
    readme: {
      overview: "Command-line calculator for basic arithmetic.",
      features: ["Addition, subtraction, multiplication, division", "Input validation", "Modular logic"],
      highlights: "Shows Python fundamentals and problem-solving.",
    },
  },
  {
    id: 3,
    title: "FreshBite Cafe",
    description: "Digital menu system allowing customers to order and staff to update easily.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "",
    readme: {
      overview: "Interactive digital menu for restaurants.",
      features: ["Dynamic menu rendering", "Interactive UI elements", "Responsive design"],
      highlights: "Demonstrates DOM manipulation and UI logic.",
    },
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Browser-based system for librarians to manage books and check availability.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "",
    readme: {
      overview: "Simple system for managing books and availability.",
      features: ["View and manage books", "CRUD-style interactions", "Clear UI workflow"],
      highlights: "Shows structured JavaScript and CRUD logic.",
    },
  },
  {
    id: 5,
    title: "Expense Tracker (React)",
    description: "Expense tracker with filters and state management.",
    tech: ["React"],
    repo_url: "https://github.com/Farfesadee/My_React/tree/master/Mini_Project_1",
    img: "",
    readme: {
      overview: "Frontend expense tracker with real-time updates.",
      features: ["Add and delete expenses", "Category filtering", "React state management"],
      highlights: "Demonstrates React hooks and component structure.",
    },
  },
  {
    id: 6,
    title: "Expense Tracker (Fullstack)",
    description: "Auth-protected tracker synced with FastAPI + MySQL backend.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: "",
    readme: {
      overview: "Secure expense tracking with backend persistence.",
      features: ["User authentication", "API-based data storage", "Protected routes"],
      highlights: "Shows fullstack architecture and auth flows.",
    },
  },
  {
    id: 7,
    title: "Say No To Drugs",
    description: "Awareness website educating youth on drug abuse.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    live_url: "https://say-no-to-drug-abuse.vercel.app/",
    img: "",
    readme: {
      overview: "Awareness website focused on drug abuse education.",
      features: ["Informational content pages", "Responsive layout", "Clear messaging"],
      highlights: "Demonstrates social impact and content-first design.",
    },
  },
  {
    id: 8,
    title: "Facebook Clone",
    description: "Full-stack social app with signup, login & posting features.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: "",
    readme: {
      overview: "Social media application with core Facebook features.",
      features: ["User authentication", "Post creation", "Backend API integration"],
      highlights: "Demonstrates complex fullstack workflows.",
    },
  },
  {
    id: 9,
    title: "Nigerian State App",
    description: "Add, view, edit, delete states; backend with auth & state routes.",
    tech: ["React Router", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: "",
    readme: {
      overview: "Admin-style CRUD app for managing Nigerian states.",
      features: ["Full CRUD operations", "Protected routes", "API-driven data"],
      highlights: "Shows routing and backend integration.",
    },
  },
  {
    id: 10,
    title: "Profile Card (Tailwind)",
    description: "User profile card with stats, bio, and follow button.",
    tech: ["TailwindCSS"],
    repo_url: "https://github.com/Farfesadee/Learning_Tailwind_CSS.git",
    img: "",
    readme: {
      overview: "Reusable profile card component with modern UI.",
      features: ["Responsive layout", "Utility-first styling", "Reusable component"],
      highlights: "Demonstrates Tailwind and UI precision.",
    },
  },
];

const STORAGE_KEY = "portfolio_projects";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToStorage(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch {}
}

let nextId = 100; // IDs for new projects added via admin

export function useProjects() {
  const [projects, setProjects] = useState(() => {
    const stored = loadFromStorage();
    return stored ?? DEFAULT_PROJECTS;
  });

  useEffect(() => {
    saveToStorage(projects);
  }, [projects]);

  const addProject = useCallback((data) => {
    const newProject = {
      ...data,
      id: Date.now(),
      img: data.img || "",
      tech: Array.isArray(data.tech)
        ? data.tech
        : (data.tech || "").split(",").map((t) => t.trim()).filter(Boolean),
      readme: {
        overview: data.overview || "",
        features: (data.features || "").split("\n").map((f) => f.trim()).filter(Boolean),
        highlights: data.highlights || "",
      },
    };
    setProjects((prev) => [...prev, newProject]);
    return newProject;
  }, []);

  const updateProject = useCallback((id, data) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              ...data,
              tech: Array.isArray(data.tech)
                ? data.tech
                : (data.tech || "").split(",").map((t) => t.trim()).filter(Boolean),
              readme: {
                overview: data.overview || p.readme?.overview || "",
                features: (data.features || "").split("\n").map((f) => f.trim()).filter(Boolean),
                highlights: data.highlights || p.readme?.highlights || "",
              },
            }
          : p
      )
    );
  }, []);

  const deleteProject = useCallback((id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const resetToDefaults = useCallback(() => {
    setProjects(DEFAULT_PROJECTS);
  }, []);

  return { projects, addProject, updateProject, deleteProject, resetToDefaults };
}
