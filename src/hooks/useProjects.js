import { useState, useEffect, useCallback } from "react";
import foodieImg from "../assets/projects/foodie.png";
import drugsImg from "../assets/projects/drugs.png";
import expenseImg from "../assets/projects/expense.JPG";
import facebookImg from "../assets/projects/facebook.JPG";
import trackerImg from "../assets/projects/tracker.JPG";

// Default projects — pre-seeded from the hardcoded list
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Foodie",
    description: "Turned a static restaurant design image into a responsive HTML & CSS website.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    live_url: "https://foodie.example.com",
    img: foodieImg,
    readme: {
      overview: "Responsive restaurant landing page built from a static design.",
      features: ["Mobile-first responsive layout", "Semantic HTML structure", "Clean CSS styling"],
      highlights: "Demonstrates layout accuracy and responsiveness.",
    },
  },
  {
    id: 2,
    title: "MathGenius",
    description: "AI-powered Mathematics Learning Platform for Nigerian Exam Prep with CBT, past questions, AI tutoring, and gamification.",
    tech: ["React", "FastAPI", "Supabase", "Groq AI", "SymPy", "Python"],
    repo_url: "",
    live_url: "",
    img: "",
    readme: {
      overview: "Full-stack AI learning platform with symbolic math solving, AI tutoring, CBT mode, past questions (WAEC/JAMB/NECO/BECE/NABTEB), progress tracking, and gamification features like XP, streaks, leaderboards, and battle mode.",
      features: [
        "AI Solver with step-by-step solutions using Groq LLMs + SymPy",
        "AI Tutor with level-specific textbook-grounded answers via RAG pipeline",
        "CBT Mode with timed MCQ sessions, auto-marking, and difficulty classification",
        "Past Questions from WAEC, JAMB, NECO, BECE, NABTEB with filtering",
        "Theory Practice with model-answer comparison",
        "XP & Streak System, Leaderboard, Battle Mode, Study Groups",
        "Dashboard with topic mastery, weak topic identification, and weekly reports",
        "Study Planner with AI-generated personalized schedules",
        "PWA Support with offline caching and push notifications"
      ],
      highlights: "Integrates symbolic math, AI tutoring, CBT, gamification, and RAG-powered textbook grounding into one unified platform for Nigerian students.",
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
    img: expenseImg,
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
    img: trackerImg,
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
    img: drugsImg,
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
    img: facebookImg,
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
    title: "TechVault VEGA",
    description: "Agentic RAG-powered multilingual customer support chatbot for TechVault Nigeria with voice input, order tracking, and admin dashboard.",
    tech: ["React", "FastAPI", "Google Gemini", "FAISS", "Python"],
    repo_url: "",
    live_url: "",
    img: "",
    readme: {
      overview: "Virtual Expert Gadget Assistant - an Agentic RAG chatbot built for a hackathon. Supports 6 languages (English, Yoruba, Hausa, Igbo, Pidgin, French), voice input via Web Speech API, order tracking, product recommendations, and human escalation.",
      features: [
        "Agentic RAG - Gemini AI decides which tool to call (knowledge base, order lookup, product filter)",
        "6 languages with automatic greeting detection",
        "Voice input (Speech-to-Text) in any supported language",
        "Real-time order tracking by order ID",
        "Smart product recommendations by category and budget",
        "Human escalation for complex issues",
        "Password-protected admin dashboard with live analytics",
        "In-chat satisfaction rating system",
        "Guest mode - use without an account"
      ],
      highlights: "Built for 10_alytics Hackathon. Uses Agentic RAG architecture where the AI agent autonomously decides which tool to invoke before generating a response, with multilingual support including Nigerian languages.",
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
    // Corrupted storage — fall back to defaults
    return null;
  }
}

function saveToStorage(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch {
    // Storage unavailable (e.g. private mode) — non-fatal
  }
}

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
