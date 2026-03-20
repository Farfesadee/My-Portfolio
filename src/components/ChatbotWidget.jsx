import React, { useState, useRef, useEffect } from "react";
import { SYSTEM_PROMPT } from "../data/knowledgeBase";
import { useProjects } from "../hooks/useProjects";

// ─── Backend API base URL ─────────────────────────────────────────────────────
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

// ─── Starter suggestions ──────────────────────────────────────────────────────
const STARTER_QUESTIONS = [
  "Who is Omodolapo?",
  "What tech does he use?",
  "What projects has he built?",
  "Is he available for hire?",
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const BotIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="12" rx="4" fill="currentColor" opacity="0.15"/>
    <rect x="5" y="10" width="14" height="8" rx="3" fill="currentColor"/>
    <circle cx="9" cy="14" r="1.5" fill="#0d1117"/>
    <circle cx="15" cy="14" r="1.5" fill="#0d1117"/>
    <rect x="10" y="16.5" width="4" height="1.5" rx="0.75" fill="#0d1117"/>
    <rect x="11" y="4" width="2" height="4" rx="1" fill="currentColor"/>
    <circle cx="8" cy="5" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="5" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-green-400"
          style={{ animation: `chatbotDot 1.2s ease-in-out ${i * 0.2}s infinite` }}
        />
      ))}
    </div>
  );
}

// ─── Message bubble ───────────────────────────────────────────────────────────
function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Bot avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 text-green-400">
          <BotIcon size={14} />
        </div>
      )}

      <div
        className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-green-500 text-gray-900 font-medium rounded-br-sm"
            : "bg-gray-700/80 text-gray-100 rounded-bl-sm"
        }`}
      >
        {msg.content}
      </div>
    </div>
  );
}

// ─── Main chatbot component ───────────────────────────────────────────────────
export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm Farfesadee, Omodolapo's personal AI assistant.\n\nAsk me anything about his skills, projects, or how to work with him!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showStarters, setShowStarters] = useState(true);

  const { projects } = useProjects();
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Build a dynamic system prompt that includes latest projects from the store
  const buildSystemPrompt = () => {
    const projectList = projects
      .map((p, i) => `${i + 1}. **${p.title}** — ${p.description} (Stack: ${(p.tech || []).join(", ")})`)
      .join("\n");

    return (
      SYSTEM_PROMPT +
      `\n\n## Current Projects (live from portfolio, ${projects.length} total)\n${projectList}`
    );
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setShowStarters(false);
    setError("");
    setInput("");

    const userMsg = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.slice(-8),
          system_prompt: buildSystemPrompt(),
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.detail || `Server error ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || "I'm not sure how to answer that. Please reach out via the Contact page!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Something went wrong. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I ran into an issue. You can also reach Omodolapo directly via the Contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Typing dot animation */}
      <style>{`
        @keyframes chatbotDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* ─── Chat window ───────────────────────────────────────────────────── */}
        {open && (
          <div
            className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-700/80"
            style={{ maxHeight: "calc(100vh - 120px)", background: "#111827" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gray-800/80 border-b border-gray-700/60 backdrop-blur-sm flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 flex-shrink-0">
                <BotIcon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm leading-tight">Farfesadee — AI Assistant</p>
                <p className="text-[11px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  Powered by Groq · llama-3.3-70b
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-lg hover:bg-gray-700"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, idx) => (
                <Message key={idx} msg={msg} />
              ))}
              {loading && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 text-green-400">
                    <BotIcon size={14} />
                  </div>
                  <div className="bg-gray-700/80 rounded-2xl rounded-bl-sm">
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Starter suggestions */}
            {showStarters && (
              <div className="flex-shrink-0 px-4 pb-3 flex flex-wrap gap-1.5">
                {STARTER_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-gray-600/60 text-gray-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex-shrink-0 px-3 pb-3">
              <div className="flex items-end gap-2 bg-gray-800/80 border border-gray-700/60 rounded-xl px-3 py-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    // Auto-resize
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 96) + "px";
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Omodolapo..."
                  disabled={loading}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm resize-none focus:outline-none leading-relaxed py-0.5 min-h-[24px] max-h-24"
                  style={{ height: "24px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="w-8 h-8 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed text-gray-900 flex items-center justify-center transition-all flex-shrink-0"
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
              <p className="text-center text-[10px] text-gray-600 mt-1.5">
                RAG-powered by Groq · Context-aware responses
              </p>
            </div>
          </div>
        )}

        {/* ─── Floating toggle button ─────────────────────────────────────────── */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={`group flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 font-medium text-sm ${
            open
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer"
              : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700/60 cursor-pointer"
          }`}
          aria-label="Toggle chatbot"
        >
          <span
            className={`transition-all duration-300 ${open ? "scale-90" : "scale-100 group-hover:scale-110"}`}
          >
            <BotIcon size={18} />
          </span>
          <span>{open ? "Close" : "Ask Omodolapo's AI"}</span>
          {!open && (
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
}
