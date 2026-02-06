// import React from "react";
// import { motion } from "framer-motion";

// const skills = {
//   "Frontend Development": ["React", "JavaScript", "TailwindCSS"],
//   "Backend Development": ["Python", "FastAPI", "MySQL"],
//   "Tools & Technologies": ["AI / ML", "Git", "GitHub"],
// };

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-12 text-gray-800"
//         >
//           Skills
//         </motion.h2>

//         {/* Skill Categories */}
//         <div className="grid md:grid-cols-3 gap-8 mt-10">
//           {Object.entries(skills).map(([category, items], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-700">
//                 {category}
//               </h3>

//               <ul className="space-y-2">
//                 {items.map((skill) => (
//                   <li
//                     key={skill}
//                     className="text-gray-600 text-lg flex items-center gap-2"
//                   >
//                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "HTML",
    "Python",
    "FastAPI",
    "MySQL",
    "AI / ML",
    // "AI / ML",
    "Git & GitHub",
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-100 mb-10 ml-40">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center text-gray-800 font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
