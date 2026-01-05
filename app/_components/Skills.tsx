"use client";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Fundamentals",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js (App Router)"],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "Bootstrap", "Styled Components", "SCSS", "MUI"],
  },
  {
    title: "State & Data Management",
    items: ["Redux Toolkit", "Context API", "React Query"],
  },
  {
    title: "Forms",
    items: ["React Hook Form", "Formik"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Vercel", "Supabase", "REST APIs", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-white dark:bg-[#0B1220]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Skills & Technologies
        </h2>
        <div className="mt-4 h-1.5 w-48 md:w-56 mx-auto rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]" />
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-gray-50 dark:bg-[#0F172A] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 cursor-default">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 rounded-full 
                  bg-[#8B5CF6]/10 text-[#8B5CF6] 
                  dark:bg-[#A78BFA]/10 dark:text-[#A78BFA] hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
