import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function About() {
  // COUNTERS ANIMATION
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animate = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count === target) clearInterval(interval);
      }, 30);
    };

    animate(setProjects, 10); // Example: 25 projects
    animate(setYears, 2);     // Example: 2 years experience
    animate(setClients, 5);  // Example: 10 clients
  }, []);

  return (
    <section className="py-24 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-4xl font-bold text-white dark:text-white mb-12 text-center">
          About Me
        </h1>

        {/* TOP — IMAGE + INTRO */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
            />
          </div>

          {/* INTRO TEXT */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white dark:text-white">
              I'm Omodolapo Odunayo Odushile
            </h2>

            <p className="mt-4 text-white dark:text-gray-300 leading-relaxed">
              I am a Full-Stack Developer & AI/ML Developer passionate about building 
              clean, scalable, and intelligent software solutions. I work with modern 
              tools like <span className="text-green-600 dark:text-green-400 font-medium">React, TailwindCSS, Python, FastAPI, and MySQL</span> to deliver seamless user experiences backed by reliable backend systems.
            </p>

            <p className="mt-4 text-white dark:text-gray-300 leading-relaxed">
              My work includes static websites, database systems, authentication 
              platforms, AI-powered applications, and full-stack products used by real clients.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

  {/* View Resume */}
  <a
  href="https://my-portfolio-lac-nine-73.vercel.app/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-3 rounded-xl font-semibold bg-green-600 text-white shadow-lg shadow-green-300/40 hover:bg-green-700 hover:shadow-green-400/50 transition-all duration-300"
>
  View Resume
</a>


  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download
    className="
      px-7 py-3 rounded-xl font-semibold
      border border-green-500 text-green-700 dark:text-green-400 dark:border-green-400
      bg-white/10 dark:bg-white/5 backdrop-blur-md
      hover:bg-green-600 hover:text-white hover:border-green-600
      shadow-lg shadow-gray-300/30 dark:shadow-black/20
      transition-all duration-300
    "
  >
    Download Resume
  </a>

  {/* Get in Touch */}
 <Link
  to="/contact"
  className="
    ml-22 px-7 py-3 rounded-xl font-semibold
    bg-gray-700 dark:bg-gray-700 text-white
    hover:bg-gray-800 dark:hover:bg-gray-600
    shadow-lg shadow-gray-400/30 dark:shadow-black/20
    transition-all duration-300
  "
>
  Get in Touch
</Link>

            </div>
          </div>
        </div>

        {/* COUNTERS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-green-600 dark:text-green-400">{projects}+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Completed Projects</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-green-600 dark:text-green-400">{years}+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Years of Experience</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-green-600 dark:text-green-400">{clients}+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Clients Worked With</p>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white dark:text-white text-center">
            My Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                title: "Growth",
                desc: "I learn fast, adapt quickly, and stay updated with modern tools."
              },
              {
                title: "Simplicity",
                desc: "I build clean, intuitive, and user-friendly products."
              },
              {
                title: "Impact",
                desc: "I aim to build solutions that solve real human problems."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white dark:text-white text-center">
            My Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-12">
            {[
              { step: "1. Understand", desc: "Analyze the problem and user needs." },
              { step: "2. Design", desc: "Plan structure, UI, and user flow." },
              { step: "3. Build", desc: "Write clean, scalable, and efficient code." },
              { step: "4. Improve", desc: "Refine UX, performance, and functionality." },
            ].map((w) => (
              <div
                key={w.step}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center"
              >
                <p className="font-semibold text-gray-800 dark:text-white">{w.step}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white dark:text-white text-center">
            Experience
          </h2>

          <div className="mt-12 border-l-4 border-green-600 dark:border-green-400 pl-6 space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-white dark:text-white">
                Full-Stack Developer (Trainee)
              </h3>
              <p className="text-gray-100 dark:text-gray-300">August 2025 — Present</p>
              <p className="mt-2 text-gray-100 dark:text-gray-300">
                Built full-stack applications using React, FastAPI, and MySQL; worked with clients to bring ideas to life.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-100 dark:text-white">
                Web Developer — Project Based
              </h3>
              <p className="text-gray-100 dark:text-gray-300">2025 — Present</p>
              <p className="mt-2 text-gray-100 dark:text-gray-300">
                Developed websites, dashboards, and digital solutions for small businesses and student programs.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white dark:text-white text-center">
            Education
          </h2>

          <div className="mt-12 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor of Science [B.Sc.(Ed.)] — Mathematics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">2018 — 2023</p>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-24 pb-10">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-white text-center">
            Certifications
          </h2>

          <div className="mt-12 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Full-Stack Web Development — (React + Python + FastAPI)
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI & Machine Learning Foundations
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}






















// import profile from "../assets/profile.jpg";

// export default function About() {
//   return (
//     <section className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* TITLE */}
//         <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
//           About Me
//         </h2>

//         {/* TOP SECTION: IMAGE + BIO */}
//         <div className="flex flex-col md:flex-row items-center gap-10">

//           {/* IMAGE */}
//           <div className="flex-shrink-0">
//             <img
//               src={profile}
//               alt="Profile"
//               className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* BIO TEXT */}
//           <div className="flex-1">
//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               I’m <span className="text-green-600 dark:text-green-400 font-semibold">
//                 Omodolapo Odunayo Odushile
//               </span>, a Full-Stack Web Developer and AI Developer
//               focused on building fast, reliable, and scalable digital solutions.
//               I enjoy taking ideas from concept to deployment and turning them into
//               functional, user-friendly applications.
//             </p>

//             <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               I work mainly with <strong>React</strong>, <strong>TailwindCSS</strong>,
//               <strong> Python</strong>, <strong>FastAPI</strong>, and <strong>MySQL</strong>.
//               I’m constantly learning, improving and building projects that solve
//               real problems.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-8 flex gap-4">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
//               >
//                 View Resume
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="border border-gray-700 dark:border-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 Download Resume
//               </a>

//             </div>
//           </div>
//         </div>

//         {/* VALUES / WORKFLOW SECTION */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
//             My Values & Workflow
//           </h3>

//           <div className="grid md:grid-cols-2 gap-8">
            
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//               <h4 className="text-xl font-bold text-green-600 dark:text-green-400">
//                 💡 Simplicity First
//               </h4>
//               <p className="mt-2 text-gray-700 dark:text-gray-400">
//                 I believe that clean, simple user interfaces create the best user
//                 experiences. I avoid unnecessary complexity and focus on clarity.
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//               <h4 className="text-xl font-bold text-green-600 dark:text-green-400">
//                 ⚙️ Efficient Workflow
//               </h4>
//               <p className="mt-2 text-gray-700 dark:text-gray-400">
//                 I write clean, reusable code and follow modern development
//                 patterns to ensure scalability and maintainability.
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//               <h4 className="text-xl font-bold text-green-600 dark:text-green-400">
//                 🤝 Collaboration
//               </h4>
//               <p className="mt-2 text-gray-700 dark:text-gray-400">
//                 Whether working independently or in a team, I communicate clearly
//                 and collaborate effectively to deliver the best results.
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//               <h4 className="text-xl font-bold text-green-600 dark:text-green-400">
//                 🚀 Continuous Learning
//               </h4>
//               <p className="mt-2 text-gray-700 dark:text-gray-400">
//                 Technology evolves fast, and I love growing with it—exploring AI,
//                 backend scaling, UI/UX improvements, and new frameworks.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }















// import profile from "../assets/profile.jpg";

// export default function About() {
//   return (
//     <section className="min-h-screen bg-white dark:bg-gray-900 py-24 pt-32">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
//           About Me
//         </h1>

//         {/* Two-column layout */}
//         <div className="grid md:grid-cols-2 gap-14 items-start">
          
//           {/* LEFT — Profile image */}
//           <div className="flex justify-center md:justify-start">
//             <img
//               src={profile}
//               alt="Profile"
//               className="w-80 h-80 object-cover rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* RIGHT — Text content */}
//           <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">

//             <p>
//               My name is <strong className="text-gray-900 dark:text-white">Omodolapo Odunayo Odushile</strong>, 
//               and I am a passionate Full-Stack Web Developer and AI Developer focused on building clean, 
//               efficient, and intelligent digital experiences.
//             </p>

//             <p className="mt-4">
//               Over the months, I’ve developed expertise in front-end development (React, TailwindCSS), 
//               back-end development (FastAPI, MySQL), and AI/ML concepts.  
//               What drives me is the thrill of solving real-world problems through technology.
//             </p>

//             {/* Journey section */}
//             <div className="mt-8">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
//                 My Journey
//               </h3>
//               <p>
//                 I started coding with the curiosity to understand how websites and applications work. 
//                 From HTML & CSS basics, I moved into JavaScript, React, Python, and eventually into 
//                 backend and AI development. Each project I build strengthens my skills and helps me 
//                 become a more complete developer.
//               </p>
//             </div>

//             {/* What I do section */}
//             <div className="mt-8">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
//                 What I Do
//               </h3>
//               <ul className="list-disc ml-6 space-y-2">
//                 <li>Build modern, responsive front-end interfaces</li>
//                 <li>Create fast and secure APIs with FastAPI</li>
//                 <li>Design and manage relational databases (MySQL)</li>
//                 <li>Develop AI-powered features that enhance user experience</li>
//                 <li>Implement authentication and full-stack systems</li>
//               </ul>
//             </div>

//             {/* Current focus */}
//             <div className="mt-8">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
//                 Currently Working On
//               </h3>
//               <p>
//                 Improving my AI/ML capabilities, mastering scalable backend development, and exploring 
//                 more advanced React patterns. I enjoy challenges that push me to grow.
//               </p>
//             </div>

//             {/* MY VALUES */}
// <div className="mt-12">
//   <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
//     My Values
//   </h3>

//   <div className="grid md:grid-cols-3 gap-6">

//     {/* Value 1 */}
//     <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         Growth Mindset
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I constantly learn, improve, and explore new tools to become a better developer every day.
//       </p>
//     </div>

//     {/* Value 2 */}
//     <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         Clean & Quality Work
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I write clean, readable, and maintainable code — and deliver polished, user-focused results.
//       </p>
//     </div>

//     {/* Value 3 */}
//     <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         User First
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I build solutions with empathy — always focused on solving real user problems.
//       </p>
//     </div>

//   </div>
// </div>


// {/* MY WORKFLOW */}
// <div className="mt-16">
//   <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
//     My Workflow
//   </h3>

//   <div className="space-y-6">

//     {/* Step 1 */}
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         1. Understand the Problem
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I begin with analyzing the goal, understanding the user, and defining the problem clearly.
//       </p>
//     </div>

//     {/* Step 2 */}
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         2. Plan & Design
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I create a simple structure, outline UI/UX, choose tools, and plan the development approach.
//       </p>
//     </div>

//     {/* Step 3 */}
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         3. Build Clean, Scalable Code
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I write modular, efficient, and scalable code while following best practices.
//       </p>
//     </div>

//     {/* Step 4 */}
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         4. Test & Improve
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I review, debug, test responsiveness, fix issues, and refine until it feels right.
//       </p>
//     </div>

//     {/* Step 5 */}
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
//       <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//         5. Deploy & Maintain
//       </h4>
//       <p className="text-gray-700 dark:text-gray-300">
//         I deploy the application, monitor performance, and update the project when needed.
//       </p>
//     </div>

//   </div>
// </div>


// {/* Resume Buttons — Gradient Style */}
// <div className="mt-10 flex flex-wrap gap-4">

//   {/* VIEW RESUME */}
//   <a
//     href="/resume.pdf"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="
//       px-6 py-3 rounded-full font-semibold
//       text-white
//       bg-gradient-to-r from-blue-500 to-blue-700
//       hover:from-blue-600 hover:to-blue-800
//       shadow-md hover:shadow-lg
//       transition
//     "
//   >
//     View Resume
//   </a>

//   {/* DOWNLOAD RESUME */}
//   <a
//     href="/resume.pdf"
//     download
//     className="
//       px-6 py-3 rounded-full font-semibold
//       text-white
//       bg-gradient-to-r from-green-500 to-green-700
//       hover:from-green-600 hover:to-green-800
//       shadow-md hover:shadow-lg
//       transition
//     "
//   >
//     Download Resume
//   </a>

// </div>











            // {/* Call to action */}
            // <a
            //   href="/contact"
            //   className="inline-block mt-10 px-6 py-3 ml-25 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold rounded-full shadow-md transition"
            // >
            //   Get in Touch
            // </a>

  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
// }











// import React from "react";

// export default function About() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>

//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* Image */}
//           <div className="w-full">
//             <img
//               src="/profile.jpg"
//               alt="Profile"
//               className="w-full rounded-xl shadow-md object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//               Hello, I'm Odushile Omodolapo
//             </h3>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               I'm a passionate full-stack developer who enjoys turning ideas into
//               functional digital experiences. I love building clean, responsive,
//               and user-friendly websites using modern technologies like React,
//               TailwindCSS, FastAPI, and MySQL.
//             </p>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               Over time, I’ve worked on several projects ranging from frontend-only
//               websites to full-stack applications with authentication, databases,
//               and dynamic UI components. I enjoy solving problems, learning new
//               tools, and bringing creativity into development.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               I’m always open to collaboration, and I'm currently focused on
//               improving my skills, building real-world applications, and helping
//               brands bring their ideas to life.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import profile from "../assets/profile.jpg";

// export default function About() {
//   return (
//     <section className="min-h-screen bg-white dark:bg-gray-900 py-24 pt-32">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT — Profile Image */}
//         <div className="flex justify-center">
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700"
//           />
//         </div>

//         {/* RIGHT — Text */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
//             About Me
//           </h2>

//           <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//             I am Omodolapo Odunayo Odushile, a dedicated Full-Stack Web Developer
//             and AI Developer with a passion for building efficient, user-friendly,
//             and intelligent applications.
//           </p>

//           <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//             My expertise spans HTML, CSS, JavaScript, React, TailwindCSS, Python,
//             FastAPI, MySQL, and AI/ML techniques — allowing me to create powerful
//             solutions that combine clean front-end design with reliable back-end
//             systems.
//           </p>

//           <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//             I constantly explore new ideas, learn emerging technologies, and enjoy solving
//             complex problems with clean, maintainable code. I am committed to continuous
//             improvement and delivering real value through technology.
//           </p>

//           {/* Call to action */}
//           <a
//             href="/contact"
//             className="inline-block mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-900 dark:text-gray-900 font-semibold rounded-full shadow-md transition"
//           >
//             Get In Touch
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
