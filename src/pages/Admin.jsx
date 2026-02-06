import React, { useState } from "react";

const emptyProject = {
  title: "",
  slug: "",
  description: "",
  image_path: "",
  live_url: "",
  repo_url: "",
};

export default function Admin() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

  const [secret, setSecret] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");

  const [health, setHealth] = useState(null);

  const [publicMessages, setPublicMessages] = useState([]);
  const [publicSkip, setPublicSkip] = useState(0);
  const [publicLimit, setPublicLimit] = useState(10);

  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [messageId, setMessageId] = useState("");
  const [messageById, setMessageById] = useState(null);

  const [projectId, setProjectId] = useState("");
  const [projectById, setProjectById] = useState(null);
  const [projectDraft, setProjectDraft] = useState(emptyProject);
  const [projects, setProjects] = useState([]);

  const [cv, setCv] = useState(null);
  const [cvDraft, setCvDraft] = useState({ content: "", file_url: "" });

  const resetStatus = () => {
    setStatus("");
    setError("");
  };

  const buildUrl = (path, params = {}) => {
    const url = new URL(path, apiBaseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });
    return url.toString();
  };

  const apiRequest = async (path, { method = "GET", params, body } = {}) => {
    resetStatus();
    setBusy(method + " " + path);
    try {
      const url = buildUrl(path, params);
      const response = await fetch(url, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        throw new Error(data?.detail || data?.message || `Request failed (${response.status})`);
      }

      return data;
    } finally {
      setBusy("");
    }
  };

  const requireSecret = () => {
    if (!secret) {
      throw new Error("Admin secret is required for this action.");
    }
  };

  const handleHealth = async () => {
    try {
      const data = await apiRequest("/");
      setHealth(data);
      setStatus("Server is reachable.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadPublicMessages = async () => {
    try {
      const data = await apiRequest("/messages", {
        params: { skip: publicSkip, limit: publicLimit },
      });
      setPublicMessages(Array.isArray(data) ? data : []);
      setStatus("Loaded public messages.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadPublicLatest = async () => {
    try {
      const data = await apiRequest("/messages/latest");
      setPublicMessages(Array.isArray(data) ? data : []);
      setStatus("Loaded latest public messages.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadAllMessages = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/messages", { params: { secret } });
      setMessages(Array.isArray(data) ? data : []);
      setStatus("Loaded all messages.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadUnreadMessages = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/messages/unread", { params: { secret } });
      setUnreadMessages(Array.isArray(data) ? data : []);
      setStatus("Loaded unread messages.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadUnreadCount = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/messages/unread/count", { params: { secret } });
      setUnreadCount(data?.unread_count ?? 0);
      setStatus("Loaded unread count.");
    } catch (err) {
      setError(err.message);
    }
  };

  const searchMessages = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/messages/search", {
        params: { q: searchQuery, secret },
      });
      setSearchResults(Array.isArray(data) ? data : []);
      setStatus("Search complete.");
    } catch (err) {
      setError(err.message);
    }
  };

  const getMessageById = async () => {
    try {
      requireSecret();
      if (!messageId) throw new Error("Message ID is required.");
      const data = await apiRequest(`/admin/messages/${messageId}`, { params: { secret } });
      setMessageById(data || null);
      setStatus("Loaded message.");
    } catch (err) {
      setError(err.message);
    }
  };

  const markMessageRead = async () => {
    try {
      requireSecret();
      if (!messageId) throw new Error("Message ID is required.");
      const data = await apiRequest(`/admin/messages/${messageId}/read`, {
        method: "PATCH",
        params: { secret },
      });
      setStatus(data?.detail || "Message marked as read.");
    } catch (err) {
      setError(err.message);
    }
  };

  const markMessageUnread = async () => {
    try {
      requireSecret();
      if (!messageId) throw new Error("Message ID is required.");
      const data = await apiRequest(`/admin/messages/${messageId}/unread`, {
        method: "PATCH",
        params: { secret },
      });
      setStatus(data?.message || "Message marked as unread.");
    } catch (err) {
      setError(err.message);
    }
  };

  const markAllRead = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/messages/mark_all_read", {
        method: "PATCH",
        params: { secret },
      });
      setStatus(data?.message || "All messages marked as read.");
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteMessage = async () => {
    try {
      requireSecret();
      if (!messageId) throw new Error("Message ID is required.");
      const data = await apiRequest(`/admin/messages/${messageId}`, {
        method: "DELETE",
        params: { secret },
      });
      setStatus(data?.detail || "Message deleted.");
    } catch (err) {
      setError(err.message);
    }
  };

  const getProjectById = async () => {
    try {
      requireSecret();
      if (!projectId) throw new Error("Project ID is required.");
      const data = await apiRequest(`/admin/projects/${projectId}`, { params: { secret } });
      setProjectById(data || null);
      setProjectDraft(
        data
          ? {
              title: data.title || "",
              slug: data.slug || "",
              description: data.description || "",
              image_path: data.image_path || "",
              live_url: data.live_url || "",
              repo_url: data.repo_url || "",
            }
          : emptyProject
      );
      setStatus("Loaded project.");
    } catch (err) {
      setError(err.message);
    }
  };

  const updateProject = async () => {
    try {
      requireSecret();
      if (!projectId) throw new Error("Project ID is required.");
      if (!projectDraft.title || !projectDraft.slug) {
        throw new Error("Project title and slug are required.");
      }
      const data = await apiRequest(`/admin/projects/${projectId}`, {
        method: "PUT",
        params: { secret },
        body: projectDraft,
      });
      setProjectById(data?.project || null);
      setStatus(data?.message || "Project updated.");
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteProject = async () => {
    try {
      requireSecret();
      if (!projectId) throw new Error("Project ID is required.");
      const data = await apiRequest(`/admin/projects/${projectId}`, {
        method: "DELETE",
        params: { secret },
      });
      setStatus(data?.message || "Project deleted.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadProjects = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/projects", { params: { secret } });
      setProjects(Array.isArray(data) ? data : []);
      setStatus("Loaded projects.");
    } catch (err) {
      setError(err.message);
    }
  };

  const createProject = async () => {
    try {
      requireSecret();
      if (!projectDraft.title || !projectDraft.slug) {
        throw new Error("Project title and slug are required.");
      }
      const data = await apiRequest("/admin/projects", {
        method: "POST",
        params: { secret },
        body: projectDraft,
      });
      setProjectById(data?.project || null);
      setStatus(data?.message || "Project created.");
    } catch (err) {
      setError(err.message);
    }
  };

  const loadCv = async () => {
    try {
      const data = await apiRequest("/cv");
      setCv(data || null);
      setCvDraft({
        content: data?.content || "",
        file_url: data?.file_url || "",
      });
      setStatus("Loaded CV.");
    } catch (err) {
      setError(err.message);
    }
  };

  const updateCv = async () => {
    try {
      requireSecret();
      const data = await apiRequest("/admin/cv", {
        method: "PUT",
        params: { secret },
        body: cvDraft,
      });
      setCv(data?.cv || null);
      setStatus(data?.message || "CV updated.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin</h1>
        <p className="text-gray-600 mt-2">
          API base: <span className="font-medium">{apiBaseUrl}</span>
        </p>

        <div className="mt-6 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Admin Secret</label>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter ADMIN_SECRET"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleHealth}
              disabled={busy !== ""}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Check Server
            </button>
            <button
              onClick={loadUnreadCount}
              disabled={busy !== ""}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Get Unread Count
            </button>
          </div>

          {status && <p className="mt-3 text-green-700">{status}</p>}
          {error && <p className="mt-3 text-red-600">{error}</p>}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <section className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Public Messages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <input
                type="number"
                value={publicSkip}
                onChange={(e) => setPublicSkip(Number(e.target.value))}
                className="w-24 p-2 border rounded-lg"
                placeholder="skip"
              />
              <input
                type="number"
                value={publicLimit}
                onChange={(e) => setPublicLimit(Number(e.target.value))}
                className="w-24 p-2 border rounded-lg"
                placeholder="limit"
              />
              <button
                onClick={loadPublicMessages}
                disabled={busy !== ""}
                className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                Load /messages
              </button>
              <button
                onClick={loadPublicLatest}
                disabled={busy !== ""}
                className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
              >
                Load /messages/latest
              </button>
            </div>
            <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
              {JSON.stringify(publicMessages, null, 2)}
            </pre>
          </section>

          <section className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Admin Messages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={loadAllMessages}
                disabled={busy !== ""}
                className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                Load All
              </button>
              <button
                onClick={loadUnreadMessages}
                disabled={busy !== ""}
                className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Load Unread
              </button>
              <button
                onClick={markAllRead}
                disabled={busy !== ""}
                className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
              >
                Mark All Read
              </button>
            </div>

            <div className="mt-4 flex gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search messages"
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={searchMessages}
                disabled={busy !== ""}
                className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                Search
              </button>
            </div>

            <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
              {JSON.stringify(messages, null, 2)}
            </pre>
            <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
              {JSON.stringify(unreadMessages, null, 2)}
            </pre>
            <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
              {JSON.stringify(searchResults, null, 2)}
            </pre>
            {unreadCount !== null && (
              <p className="mt-3 text-gray-700">Unread count: {unreadCount}</p>
            )}
          </section>
        </div>

        <section className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Message Actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <input
              type="number"
              value={messageId}
              onChange={(e) => setMessageId(e.target.value)}
              placeholder="Message ID"
              className="w-40 p-2 border rounded-lg"
            />
            <button
              onClick={getMessageById}
              disabled={busy !== ""}
              className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Get By ID
            </button>
            <button
              onClick={markMessageRead}
              disabled={busy !== ""}
              className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Mark Read
            </button>
            <button
              onClick={markMessageUnread}
              disabled={busy !== ""}
              className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
            >
              Mark Unread
            </button>
            <button
              onClick={deleteMessage}
              disabled={busy !== ""}
              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
          <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
            {JSON.stringify(messageById, null, 2)}
          </pre>
        </section>

        <section className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Project Actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <input
              type="number"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Project ID"
              className="w-40 p-2 border rounded-lg"
            />
            <button
              onClick={loadProjects}
              disabled={busy !== ""}
              className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              List Projects
            </button>
            <button
              onClick={getProjectById}
              disabled={busy !== ""}
              className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Get By ID
            </button>
            <button
              onClick={deleteProject}
              disabled={busy !== ""}
              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <input
              type="text"
              value={projectDraft.title}
              onChange={(e) => setProjectDraft({ ...projectDraft, title: e.target.value })}
              placeholder="Title"
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              value={projectDraft.slug}
              onChange={(e) => setProjectDraft({ ...projectDraft, slug: e.target.value })}
              placeholder="Slug"
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              value={projectDraft.image_path}
              onChange={(e) => setProjectDraft({ ...projectDraft, image_path: e.target.value })}
              placeholder="Image Path"
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              value={projectDraft.live_url}
              onChange={(e) => setProjectDraft({ ...projectDraft, live_url: e.target.value })}
              placeholder="Live URL"
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              value={projectDraft.repo_url}
              onChange={(e) => setProjectDraft({ ...projectDraft, repo_url: e.target.value })}
              placeholder="Repo URL"
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              value={projectDraft.description}
              onChange={(e) => setProjectDraft({ ...projectDraft, description: e.target.value })}
              placeholder="Description"
              className="p-2 border rounded-lg md:col-span-2"
            />
          </div>

          <button
            onClick={updateProject}
            disabled={busy !== ""}
            className="mt-4 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Update Project
          </button>
          <button
            onClick={createProject}
            disabled={busy !== ""}
            className="mt-4 ml-3 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create Project
          </button>

          <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
            {JSON.stringify(projectById, null, 2)}
          </pre>
          <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
            {JSON.stringify(projects, null, 2)}
          </pre>
        </section>

        <section className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">CV</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={loadCv}
              disabled={busy !== ""}
              className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Load CV
            </button>
            <button
              onClick={updateCv}
              disabled={busy !== ""}
              className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Update CV
            </button>
          </div>

          <div className="mt-4 grid gap-3">
            <input
              type="text"
              value={cvDraft.file_url}
              onChange={(e) => setCvDraft({ ...cvDraft, file_url: e.target.value })}
              placeholder="CV File URL"
              className="p-2 border rounded-lg"
            />
            <textarea
              rows="6"
              value={cvDraft.content}
              onChange={(e) => setCvDraft({ ...cvDraft, content: e.target.value })}
              placeholder="CV content (optional)"
              className="p-2 border rounded-lg"
            />
          </div>

          <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
            {JSON.stringify(cv, null, 2)}
          </pre>
        </section>

        {health && (
          <section className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Health Check</h2>
            <pre className="mt-4 p-3 bg-gray-100 rounded-lg text-xs overflow-auto">
              {JSON.stringify(health, null, 2)}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}
