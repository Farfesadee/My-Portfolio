import React, { useState } from "react";
import { useProjects } from "../hooks/useProjects";

// ─── Icons ────────────────────────────────────────────────────────────────────
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);
const ResetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

// ─── Admin password (simple frontend gate) ───────────────────────────────────
const ADMIN_PASSWORD = "admin123"; // Change this to your preferred password

// ─── Empty form state ─────────────────────────────────────────────────────────
const emptyForm = {
  title: "",
  description: "",
  tech: "",
  repo_url: "",
  live_url: "",
  img: "",
  overview: "",
  features: "",
  highlights: "",
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ mode, project, onSave, onClose }) {
  const [form, setForm] = useState(() => {
    if (mode === "edit" && project) {
      return {
        title: project.title || "",
        description: project.description || "",
        tech: Array.isArray(project.tech) ? project.tech.join(", ") : (project.tech || ""),
        repo_url: project.repo_url || "",
        live_url: project.live_url || "",
        img: project.img || "",
        overview: project.readme?.overview || "",
        features: Array.isArray(project.readme?.features)
          ? project.readme.features.join("\n")
          : (project.readme?.features || ""),
        highlights: project.readme?.highlights || "",
      };
    }
    return emptyForm;
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (!form.tech.trim()) e.tech = "At least one technology is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onSave(form);
  };

  const Field = ({ label, name, type = "text", placeholder, required }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: "" }); }}
        placeholder={placeholder}
        className={`w-full bg-gray-700/60 border ${errors[name] ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors`}
      />
      {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">
            {mode === "add" ? "✨ Add New Project" : "✏️ Edit Project"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-2xl leading-none">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Project Title" name="title" placeholder="e.g. My Awesome App" required />
            <Field label="Technologies" name="tech" placeholder="React, FastAPI, MySQL" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => { setForm({ ...form, description: e.target.value }); setErrors({ ...errors, description: "" }); }}
              placeholder="Brief description of what this project does..."
              className={`w-full bg-gray-700/60 border ${errors.description ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors resize-none`}
            />
            {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="GitHub Repo URL" name="repo_url" placeholder="https://github.com/..." />
            <Field label="Live URL (optional)" name="live_url" placeholder="https://yourproject.com" />
          </div>

          <Field label="Image URL (optional)" name="img" placeholder="https://... or leave blank" />

          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Project README Details</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Overview</label>
                <textarea
                  rows={2}
                  value={form.overview}
                  onChange={(e) => setForm({ ...form, overview: e.target.value })}
                  placeholder="One-paragraph overview of the project..."
                  className="w-full bg-gray-700/60 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Key Features <span className="text-gray-500 text-xs">(one per line)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  placeholder={"User authentication\nResponsive design\nReal-time updates"}
                  className="w-full bg-gray-700/60 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors resize-none font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Highlights</label>
                <input
                  type="text"
                  value={form.highlights}
                  onChange={(e) => setForm({ ...form, highlights: e.target.value })}
                  placeholder="What makes this project stand out..."
                  className="w-full bg-gray-700/60 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-gray-900 font-semibold transition-all shadow-lg shadow-green-500/25"
            >
              {mode === "add" ? "Add Project" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Confirmation ──────────────────────────────────────────────────────
function DeleteConfirm({ project, onConfirm, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-800 border border-red-500/40 rounded-2xl w-full max-w-md p-6 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrashIcon />
          </div>
          <h3 className="text-xl font-bold text-white">Delete Project?</h3>
          <p className="mt-2 text-gray-400">
            Are you sure you want to delete{" "}
            <span className="text-white font-semibold">"{project.title}"</span>?
            This cannot be undone.
          </p>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:text-white transition-all font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-all"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-200 group">
      {/* Image / Placeholder */}
      <div className="h-36 bg-gray-700/50 relative overflow-hidden">
        {project.img ? (
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🖥️</span>
          </div>
        )}
        {/* Tech badges overlay */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {(project.tech || []).slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-medium bg-gray-900/80 text-gray-300 px-2 py-0.5 rounded-full backdrop-blur-sm">
              {t}
            </span>
          ))}
          {(project.tech || []).length > 3 && (
            <span className="text-[10px] font-medium bg-gray-900/80 text-gray-300 px-2 py-0.5 rounded-full">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{project.description}</p>

        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => onEdit(project)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white text-sm font-medium transition-all"
          >
            <EditIcon /> Edit
          </button>
          <button
            onClick={() => onDelete(project)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 text-sm font-medium transition-all border border-red-500/20"
          >
            <TrashIcon />
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-2">
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" rel="noreferrer"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              GitHub ↗
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noreferrer"
              className="text-xs text-gray-500 hover:text-green-400 transition-colors">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Component ─────────────────────────────────────────────────────
export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const { projects, addProject, updateProject, deleteProject, resetToDefaults } = useProjects();

  const [modalMode, setModalMode] = useState(null); // "add" | "edit" | null
  const [editingProject, setEditingProject] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const handleSave = (formData) => {
    if (modalMode === "add") {
      addProject(formData);
      showToast("Project added successfully!");
    } else {
      updateProject(editingProject.id, formData);
      showToast("Project updated successfully!");
    }
    setModalMode(null);
    setEditingProject(null);
  };

  const handleDelete = () => {
    deleteProject(deleteTarget.id);
    showToast("Project deleted.", "error");
    setDeleteTarget(null);
  };

  const handleReset = () => {
    if (window.confirm("Reset all projects to defaults? All your custom changes will be lost.")) {
      resetToDefaults();
      showToast("Projects reset to defaults.");
    }
  };

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.tech || []).some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // ─── Login Gate ──────────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-400">
              <LockIcon />
            </div>
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400 mt-2">Sign in to manage your portfolio projects</p>
          </div>

          <form onSubmit={handleLogin} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setAuthError(""); }}
              placeholder="Enter admin password"
              className={`w-full bg-gray-700/60 border ${authError ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors`}
              autoFocus
            />
            {authError && <p className="text-red-400 text-sm mt-2">{authError}</p>}
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-500/25"
            >
              Sign In
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">
              Default password: <code className="text-gray-400">admin123</code>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ─── Admin Dashboard ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-xl shadow-xl font-medium text-white transition-all
          ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}`}>
          {toast.msg}
        </div>
      )}

      {/* Modals */}
      {modalMode && (
        <ProjectModal
          mode={modalMode}
          project={editingProject}
          onSave={handleSave}
          onClose={() => { setModalMode(null); setEditingProject(null); }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          project={deleteTarget}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-green-400 font-medium tracking-widest uppercase text-sm mb-1">Dashboard</p>
            <h1 className="text-4xl font-bold text-white">Projects Manager</h1>
            <p className="text-gray-400 mt-1">{projects.length} projects in your portfolio</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-all text-sm font-medium"
            >
              <ResetIcon /> Reset Defaults
            </button>
            <button
              onClick={() => { setModalMode("add"); setEditingProject(null); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-gray-900 font-semibold transition-all shadow-lg shadow-green-500/25"
            >
              <PlusIcon /> Add Project
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="px-4 py-2.5 rounded-xl border border-gray-700 text-gray-500 hover:text-red-400 hover:border-red-500/40 transition-all text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Projects", value: projects.length, color: "text-green-400" },
            { label: "With Live Demo", value: projects.filter(p => p.live_url).length, color: "text-blue-400" },
            { label: "With GitHub", value: projects.filter(p => p.repo_url).length, color: "text-purple-400" },
            { label: "With Images", value: projects.filter(p => p.img).length, color: "text-yellow-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 text-center">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by name or technology..."
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-5 py-3 focus:outline-none focus:border-green-500 transition-colors"
          />
        </div>

        {/* Project Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-gray-400">No projects found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={(p) => { setEditingProject(p); setModalMode("edit"); }}
                onDelete={(p) => setDeleteTarget(p)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
