"use client";

import { motion, useReducedMotion } from "framer-motion";

const skills = [
  {
    title: "Frontend Fundamentals",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js (App Router)", "Vue.js"],
  },
  {
    title: "Styling & UI",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Styled Components",
      "SCSS",
      "MUI",
    ],
  },
  {
    title: "State & Data Management",
    items: ["Redux Toolkit", "Context API", "React Query"],
  },
  {
    title: "Forms & Validation",
    items: ["React Hook Form", "Formik", "Zod"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Vercel", "Supabase", "REST APIs", "Figma"],
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const initialAnimation = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 20 };

  const visibleAnimation = { opacity: 1, y: 0 };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-white px-5 py-20 dark:bg-[#0B1220] sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={initialAnimation}
          whileInView={visibleAnimation}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            What I work with
          </p>

          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl"
          >
            Skills & Technologies
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-linear-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] sm:w-36"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Technologies and tools I use to build responsive, accessible, and
            maintainable web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={initialAnimation}
              whileInView={visibleAnimation}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
              className="group rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 transition-colors duration-200 hover:border-violet-300 dark:border-gray-800 dark:bg-[#0F172A] dark:hover:border-violet-500/50 sm:p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
                {skill.title}
              </h3>

              <ul className="flex flex-wrap gap-2.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-violet-200/70 bg-violet-500/5 px-3 py-2 text-sm font-medium text-violet-700 transition-colors duration-200 group-hover:border-violet-200 dark:border-violet-400/15 dark:bg-violet-400/5 dark:text-violet-300 dark:group-hover:border-violet-400/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
