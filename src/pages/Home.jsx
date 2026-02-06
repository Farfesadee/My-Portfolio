import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const titles = [
    "AI Developer",
    "Full-Stack Web Developer",
    "Frontend Engineer (React)",
    "Backend Developer (FastAPI)",
    "Software Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-green-400">Odushile Omodolapo Odunayo</span>
          </h1>

          {/* FADE + SLIDE JOB TITLE */}
          <div className="h-12 mt-4 overflow-hidden">
            <h2
            key={index}
            className="
            text-2xl md:text-3xl font-semibold
            text-green-300 
            transition-all duration-700 
            opacity-0 translate-y-3 animate-fadeSlide glow"> 
            {titles[index]}
            </h2>

          </div>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            I build clean, fast, modern applications using React, TailwindCSS,
            Python, FastAPI, and MySQL.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/projects"
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center md:justify-end flex-1">
          <div className="p-1.5 rounded-[28px] bg-gradient-to-br from-slate-200/80 via-white/40 to-slate-400/30 shadow-2xl">
            <div className="bg-slate-900/40 rounded-[26px] p-2">
              <img
                src={profile}
                alt="Professional headshot"
                className="w-72 h-80 object-cover object-top rounded-[22px] ring-1 ring-white/20 shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}









// import profile from "../assets/profile.jpg";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const titles = [
//     "Full-Stack Web Developer",
//     "AI Developer",
//     "Frontend Specialist",
//     "Backend Developer",
//   ];

//   const [index, setIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       setDisplayedText((prev) => prev + titles[index][charIndex]);
//       setCharIndex((prev) => prev + 1);
//     }, 100);

//     if (charIndex === titles[index].length) {
//       clearInterval(typingInterval);

//       setTimeout(() => {
//         setDisplayedText("");
//         setCharIndex(0);
//         setIndex((prev) => (prev + 1) % titles.length);
//       }, 1500);
//     }

//     return () => clearInterval(typingInterval);
//   }, [charIndex, index]);

//   return (
//     <section className="bg-gray-900 text-white py-32">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

//         {/* LEFT SIDE — TEXT */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Hi, I'm{" "}
//             <span className="text-green-400">Omodolapo Odunayo Odushile</span>
//           </h1>

//           {/* Typing effect */}
//           <h2 className="text-2xl md:text-3xl text-green-300 font-semibold h-10 mt-3">
//             {displayedText}
//             <span className="animate-pulse">|</span>
//           </h2>

//           <p className="mt-6 text-lg text-gray-300 leading-relaxed">
//             Full-Stack Web Developer & AI Developer focused on building fast,
//             clean, and user-friendly applications using modern technologies like
//             React, TailwindCSS, FastAPI, and MySQL.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/projects"
//               className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md"
//             >
//               View Projects
//             </Link>

//             <Link
//               to="/contact"
//               className="border border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SIDE — IMAGE */}
//         <div className="flex justify-center md:justify-end flex-1">
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-72 h-72 object-cover rounded-full border border-gray-700 shadow-xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }








// import profile from "../assets/profile.jpg";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <section className="bg-gray-900 text-white py-32">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

//         {/* LEFT SIDE — TEXT */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Hi, I'm{" "}
//             <span className="text-green-400">Omodolapo Odunayo Odushile</span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-300 leading-relaxed">
//             Full-Stack Web Developer & AI Developer focused on building fast,
//             clean, and user-friendly applications using modern technologies like
//             React, TailwindCSS, FastAPI, and MySQL.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/projects"
//               className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md"
//             >
//               View Projects
//             </Link>

//             <Link
//               to="/contact"
//               className="border border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SIDE — IMAGE */}
//         <div className="flex justify-center md:justify-end flex-1">
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-72 h-72 object-cover rounded-full border border-gray-700 shadow-xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }












// import profile from "../assets/profile.jpg";
// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="bg-gray-900 text-white py-32">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

//         {/* LEFT SIDE — TEXT */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Hi, I'm <span className="text-green-400">Omodolapo Odunayo Odushile</span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-300 leading-relaxed">
//             A dedicated Full-Stack Web Developer and AI Developer with a passion 
//             for creating efficient, user-friendly, and intelligent applications.
//             I specialize in React, TailwindCSS, Python, FastAPI, and MySQL — 
//             building solutions that combine intuitive front-end interfaces with 
//             reliable back-end systems.
//           </p>

//           <p className="mt-4 text-lg text-gray-300 leading-relaxed">
//             I’ve worked on responsive static websites, authentication systems, 
//             database-driven applications, and real-world AI integrations.  
//             I enjoy solving complex problems, writing clean code, and learning 
//             new technologies that enhance my workflow.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/projects"
//               className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md"
//             >
//               View Projects
//             </Link>

//             <Link
//               to="/contact"
//               className="border border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SIDE — IMAGE */}
//         <div className="flex justify-center md:justify-end flex-1">
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-72 h-72 object-cover rounded-full border border-gray-700 shadow-xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
