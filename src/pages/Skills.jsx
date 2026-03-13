import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    label: "Frontend",
    color: "bg-blue-500",
    glow: "shadow-blue-500/30",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TailwindCSS", level: 90 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    label: "Backend",
    color: "bg-green-500",
    glow: "shadow-green-500/30",
    skills: [
      { name: "Python", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    label: "Tools & AI",
    color: "bg-purple-500",
    glow: "shadow-purple-500/30",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "AI / ML", level: 70 },
      { name: "REST APIs", level: 80 },
    ],
  },
];

function SkillBar({ name, level, color }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${level}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/60 rounded-full h-2.5">
        <div
          ref={barRef}
          style={{ width: "0%" }}
          className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`}
        />
      </div>
    </div>
  );
}

const techBadges = [
  { icon: "⚛️", name: "React" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "🐍", name: "Python" },
  { icon: "⚡", name: "FastAPI" },
  { icon: "🎨", name: "TailwindCSS" },
  { icon: "🗄️", name: "MySQL" },
  { icon: "🤖", name: "AI / ML" },
  { icon: "🔧", name: "Git & GitHub" },
  { icon: "🌐", name: "HTML & CSS" },
  { icon: "🔌", name: "REST APIs" },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 font-medium tracking-widest uppercase text-sm mb-3">What I Work With</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            A curated set of tools and technologies I use to build fast, clean, and scalable software.
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techBadges.map((t) => (
            <span
              key={t.name}
              className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-green-500/50 hover:bg-gray-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-default"
            >
              <span>{t.icon}</span>
              {t.name}
            </span>
          ))}
        </div>

        {/* Skill category cards with progress bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className={`bg-gray-800/60 border border-gray-700/60 rounded-2xl p-6 shadow-xl ${cat.glow} hover:border-gray-600 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                <h2 className="text-lg font-bold text-white">{cat.label}</h2>
              </div>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            🚀 Currently deepening expertise in{" "}
            <span className="text-green-400 font-medium">AI/ML</span>,{" "}
            <span className="text-green-400 font-medium">system design</span>, and{" "}
            <span className="text-green-400 font-medium">cloud deployment</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
