
// import React, { useState, useRef, useEffect } from "react";

// // import foodie from "../assets/projects/foodie.png";
// // import calculator from "../assets/projects/calculator.png";
// // import freshbite from "../assets/projects/freshbite.png";
// // import library from "../assets/projects/library.png";
// import expense from "../assets/projects/expense.JPG";
// // import drugs from "../assets/projects/drugs.png";
// // import profilecard from "../assets/projects/profilecard.png";
// // import facebook from "../assets/projects/facebook.png";
// // import states from "../assets/projects/states.png";


// const projects = [
//   {
//     id: 1,
//     title: "Foodie",
//     desc: "Turned a static restaurant design image into a responsive HTML & CSS website.",
//     tech: ["HTML", "CSS"],
//     github: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Foodie+Screenshot",
//   },
//   {
//     id: 2,
//     title: "Python Calculator",
//     desc: "A simple Python calculator that performs basic operations.",
//     tech: ["Python"],
//     github: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Python+Calculator",
//   },
//   {
//     id: 3,
//     title: "FreshBite Cafe",
//     desc: "Digital menu system allowing customers to order and staff to update easily.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
//     img: "https://via.placeholder.com/720x420.png?text=FreshBite+Cafe",
//   },
//   {
//     id: 4,
//     title: "Library Management System",
//     desc: "Browser-based system for librarians to manage books and check availability.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
//     img: "https://via.placeholder.com/720x420.png?text=Library+System",
//   },
//   {
//     id: 5,
//     title: "Expense Tracker (React)",
//     desc: "Expense tracker with filters and state management.",
//     tech: ["React"],
//     github: "https://github.com/Farfesadee/My_React/tree/master/Mini_Project_1",
//     img: expense,
//   },
//   {
//     id: 6,
//     title: "Expense Tracker (Fullstack)",
//     desc: "Auth-protected tracker synced with FastAPI + MySQL backend.",
//     tech: ["React", "FastAPI", "MySQL"],
//     github: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Expense+Tracker+Fullstack",
//   },
//   {
//     id: 7,
//     title: "Say No To Drugs",
//     desc: "Awareness website educating youth on drug abuse.",
//     tech: ["HTML", "CSS"],
//     github: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Say+No+To+Drugs",
//   },
//   {
//     id: 8,
//     title: "Facebook Clone",
//     desc: "Full-stack social app with signup, login & posting features.",
//     tech: ["React", "FastAPI", "MySQL"],
//     github: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Facebook+Clone",
//   },
//   {
//     id: 9,
//     title: "Nigerian State App",
//     desc: "Add, view, edit, delete states; backend with auth & state routes.",
//     tech: ["React Router", "FastAPI", "MySQL"],
//     github: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Nigerian+State+App",
//   },
//   {
//     id: 10,
//     title: "Profile Card (Tailwind)",
//     desc: "User profile card with stats, bio, and follow button.",
//     tech: ["TailwindCSS"],
//     github: "https://github.com/Farfesadee/Learning_Tailwind_CSS.git",
//     img: "https://via.placeholder.com/720x420.png?text=Profile+Card",
//   },
// ];

// export default function Projects() {
//   const [index, setIndex] = useState(0);
//   const length = projects.length;
//   const timeoutRef = useRef(null);

//   // Auto slide
//   useEffect(() => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearTimeout(timeoutRef.current);
//   }, [index]);

//   const goPrev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
//   const goNext = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));

//   return (
//     <section className="py-20 bg-gray-900 min-h-screen">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-gray-100 mb-8">Projects</h2>

//         {/* Slider */}
//         <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">

//           {/* SLIDE TRACK */}
//           <div
//             className="flex transition-transform duration-700 ease-out"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {projects.map((p) => (
//               <div
//                 key={p.id}
//                 className="min-w-full flex flex-col md:flex-row items-stretch"
//               >
//                 {/* IMAGE AREA */}
//                 <div className="relative md:w-1/2 w-full h-56 md:h-auto">
//                   <img
//                     src={p.img}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* LEFT ARROW */}
//                   <button
//                     onClick={goPrev}
//                     className="
//                       absolute top-1/2 left-4 -translate-y-1/2 
//                       w-11 h-11 flex items-center justify-center 
//                       rounded-full bg-gray-900 bg-opacity-80 
//                       text-white text-xl font-bold
//                       hover:bg-opacity-100 transition
//                     "
//                   >
//                     ‹
//                   </button>

//                   {/* RIGHT ARROW */}
//                   <button
//                     onClick={goNext}
//                     className="
//                       absolute top-1/2 right-4 -translate-y-1/2 
//                       w-11 h-11 flex items-center justify-center 
//                       rounded-full bg-gray-900 bg-opacity-80 
//                       text-white text-xl font-bold
//                       hover:bg-opacity-100 transition
//                     "
//                   >
//                     ›
//                   </button>
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-semibold text-gray-800">{p.title}</h3>
//                     <p className="mt-3 text-gray-600">{p.desc}</p>

//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {p.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     {p.github ? (
//                       <a
//                         href={p.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
//                       >
//                         View Code
//                       </a>
//                     ) : (
//                       <span className="text-sm text-gray-500">No repo</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* DOTS */}
//           <div className="mt-4 pb-4 flex justify-center gap-2">
//             {projects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`
//                   w-3 h-3 rounded-full transition 
//                   ${i === index ? "bg-gray-900 scale-110" : "bg-gray-400"}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useState, useRef, useEffect } from "react";
import expense from "../assets/projects/expense.JPG";

const projects = [
  {
    id: 1,
    title: "Foodie",
    description: "Turned a static restaurant design image into a responsive HTML & CSS website.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    live_url: "https://foodie.example.com",
    img: "https://via.placeholder.com/720x420.png?text=Foodie+Screenshot",
  },
  {
    id: 2,
    title: "Python Calculator",
    description: "A simple Python calculator that performs basic operations.",
    tech: ["Python"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: "https://via.placeholder.com/720x420.png?text=Python+Calculator",
  },
  {
    id: 3,
    title: "FreshBite Cafe",
    description: "Digital menu system allowing customers to order and staff to update easily.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "https://via.placeholder.com/720x420.png?text=FreshBite+Cafe",
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Browser-based system for librarians to manage books and check availability.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo_url: "https://github.com/Farfesadee/JavaScript-Projects-1-and-2-.git",
    img: "https://via.placeholder.com/720x420.png?text=Library+System",
  },
  {
    id: 5,
    title: "Expense Tracker (React)",
    description: "Expense tracker with filters and state management.",
    tech: ["React"],
    repo_url: "https://github.com/Farfesadee/My_React/tree/master/Mini_Project_1",
    img: expense,
  },
  {
    id: 6,
    title: "Expense Tracker (Fullstack)",
    description: "Auth-protected tracker synced with FastAPI + MySQL backend.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
    img: "https://via.placeholder.com/720x420.png?text=Expense+Tracker+Fullstack",
  },
  {
    id: 7,
    title: "Say No To Drugs",
    description: "Awareness website educating youth on drug abuse.",
    tech: ["HTML", "CSS"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    live_url: "https://say-no-to-drug-abuse.vercel.app/",
    img: "https://via.placeholder.com/720x420.png?text=Say+No+To+Drugs",
  },
  {
    id: 8,
    title: "Facebook Clone",
    description: "Full-stack social app with signup, login & posting features.",
    tech: ["React", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: "https://via.placeholder.com/720x420.png?text=Facebook+Clone",
  },
  {
    id: 9,
    title: "Nigerian State App",
    description: "Add, view, edit, delete states; backend with auth & state routes.",
    tech: ["React Router", "FastAPI", "MySQL"],
    repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
    img: "https://via.placeholder.com/720x420.png?text=Nigerian+State+App",
  },
  {
    id: 10,
    title: "Profile Card (Tailwind)",
    description: "User profile card with stats, bio, and follow button.",
    tech: ["TailwindCSS"],
    repo_url: "https://github.com/Farfesadee/Learning_Tailwind_CSS.git",
    img: "https://via.placeholder.com/720x420.png?text=Profile+Card",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const length = projects.length;
  const timeoutRef = useRef(null);

  // Auto slide
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goPrev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-100 mb-8">Projects</h2>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          {/* Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p) => (
              <div
                key={p.id}
                className="min-w-full flex flex-col md:flex-row items-stretch"
              >
                {/* Image */}
                <div className="relative md:w-1/2 w-full h-56 md:h-auto">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Left Arrow */}
                  <button
                    onClick={goPrev}
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-80 text-white text-xl font-bold hover:bg-opacity-100 transition"
                  >
                    ‹
                  </button>
                  {/* Right Arrow */}
                  <button
                    onClick={goNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-80 text-white text-xl font-bold hover:bg-opacity-100 transition"
                  >
                    ›
                  </button>
                </div>

                {/* Content */}
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{p.title}</h3>
                    <p className="mt-3 text-gray-600">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech?.map((t, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    {p.repo_url ? (
                      <a
                        href={p.repo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                      >
                        View Code
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">No repo</span>
                    )}

                    {p.live_url ? (
                      <a
                        href={p.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      >
                        Live Preview
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 pb-4 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${i === index ? "bg-gray-900 scale-110" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}







// import React, { useState, useRef, useEffect } from "react";
// import expense from "../assets/projects/expense.JPG";

// // Hardcoded fallback projects
// const defaultProjects = [
//   {
//     id: 1,
//     title: "Foodie",
//     desc: "Turned a static restaurant design image into a responsive HTML & CSS website.",
//     tech: ["HTML", "CSS"],
//     github: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Foodie+Screenshot",
//   },
//   {
//     id: 2,
//     title: "Python Calculator",
//     desc: "A simple Python calculator that performs basic operations.",
//     tech: ["Python"],
//     github: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Python+Calculator",
//   },
//   {
//     id: 5,
//     title: "Expense Tracker (React)",
//     desc: "Expense tracker with filters and state management.",
//     tech: ["React"],
//     github: "https://github.com/Farfesadee/My_React/tree/master/Mini_Project_1",
//     img: expense,
//   },
//   // add other projects as needed
//   {
//     id: 6,
//     title: "Expense Tracker (Fullstack)",
//     description: "Auth-protected tracker synced with FastAPI + MySQL backend.",
//     tech: ["React", "FastAPI", "MySQL"],
//     repo_url: "https://github.com/Eleventh-landlord/Foodie.git",
//     img: "https://via.placeholder.com/720x420.png?text=Expense+Tracker+Fullstack",
//   },
//   {
//     id: 7,
//     title: "Say No To Drugs",
//     description: "Awareness website educating youth on drug abuse.",
//     tech: ["HTML", "CSS"],
//     repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Say+No+To+Drugs",
//   },
//   {
//     id: 8,
//     title: "Facebook Clone",
//     description: "Full-stack social app with signup, login & posting features.",
//     tech: ["React", "FastAPI", "MySQL"],
//     repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Facebook+Clone",
//   },
//   {
//     id: 9,
//     title: "Nigerian State App",
//     description: "Add, view, edit, delete states; backend with auth & state routes.",
//     tech: ["React Router", "FastAPI", "MySQL"],
//     repo_url: "https://github.com/Farfesadee/SayNoToDrugAbuse.git",
//     img: "https://via.placeholder.com/720x420.png?text=Nigerian+State+App",
//   },
//   {
//     id: 10,
//     title: "Profile Card (Tailwind)",
//     description: "User profile card with stats, bio, and follow button.",
//     tech: ["TailwindCSS"],
//     repo_url: "https://github.com/Farfesadee/Learning_Tailwind_CSS.git",
//     img: "https://via.placeholder.com/720x420.png?text=Profile+Card",
//   },

// ];

// export default function Projects() {
//   const [projects, setProjects] = useState(defaultProjects);
//   const [index, setIndex] = useState(0);
//   const length = projects.length;
//   const timeoutRef = useRef(null);

//   // Fetch projects from backend if available
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/projects");
//         if (!res.ok) throw new Error("Failed to fetch projects");
//         const data = await res.json();
//         if (data && data.length > 0) setProjects(data);
//       } catch (err) {
//         console.warn("Using default projects:", err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearTimeout(timeoutRef.current);
//   }, [index, length]);

//   const goPrev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
//   const goNext = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));

//   return (
//     <section className="py-20 bg-gray-900 min-h-screen">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-gray-100 mb-8">Projects</h2>

//         {/* Slider */}
//         <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
//           <div
//             className="flex transition-transform duration-700 ease-out"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {projects.map((p) => (
//               <div
//                 key={p.id || p.slug} // fallback for backend projects
//                 className="min-w-full flex flex-col md:flex-row items-stretch"
//               >
//                 {/* IMAGE AREA */}
//                 <div className="relative md:w-1/2 w-full h-56 md:h-auto">
//                   <img
//                     src={p.img || "https://via.placeholder.com/720x420.png?text=Project"}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* LEFT ARROW */}
//                   <button
//                     onClick={goPrev}
//                     className="
//                       absolute top-1/2 left-4 -translate-y-1/2 
//                       w-11 h-11 flex items-center justify-center 
//                       rounded-full bg-gray-900 bg-opacity-80 
//                       text-white text-xl font-bold
//                       hover:bg-opacity-100 transition
//                     "
//                   >
//                     ‹
//                   </button>

//                   {/* RIGHT ARROW */}
//                   <button
//                     onClick={goNext}
//                     className="
//                       absolute top-1/2 right-4 -translate-y-1/2 
//                       w-11 h-11 flex items-center justify-center 
//                       rounded-full bg-gray-900 bg-opacity-80 
//                       text-white text-xl font-bold
//                       hover:bg-opacity-100 transition
//                     "
//                   >
//                     ›
//                   </button>
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-semibold text-gray-800">{p.title}</h3>
//                     <p className="mt-3 text-gray-600">{p.desc}</p>

//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {p.tech && p.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     {p.github ? (
//                       <a
//                         href={p.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
//                       >
//                         View Code
//                       </a>
//                     ) : (
//                       <span className="text-sm text-gray-500">No repo</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* DOTS */}
//           <div className="mt-4 pb-4 flex justify-center gap-2">
//             {projects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`
//                   w-3 h-3 rounded-full transition 
//                   ${i === index ? "bg-gray-900 scale-110" : "bg-gray-400"}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }