"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "eDariba",
    detail: "SaaS Platform · Smart Village, Egypt",
    dates: "Jun 2026 – Aug 2026",
    highlights: [
      "Developed and enhanced features in an existing Vue.js application, including tax document workflows, invoice preparation, and data validation.",
      "Worked on Amazon and Noon marketplace integrations, supporting the flow of order and product data into eDariba’s invoice processing workflows.",
      "Built and improved frontend features for tax-related pages, focusing on form interactions, data handling, and validation.",
      "Investigated frontend and REST API issues using Postman and collaborated with the team through Git, GitHub, and code reviews.",
    ],
  },
  {
    role: "Frontend Web Development Intern",
    company: "WebMasters",
    detail: "Cairo, Egypt",
    dates: "Aug 2025 – Oct 2025",
    highlights: [
      "Built the Etoile restaurant web app independently with React.js and Supabase, focusing on a responsive and accessible interface.",
      "Contributed reusable components to team e-commerce (React.js) and LMS (Next.js and TypeScript) projects.",
      "Helped modernize two legacy projects by migrating styles to Tailwind CSS and restructuring JavaScript; participated in code reviews and Git workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-gray-50 px-5 py-20 dark:bg-[#0B1220] sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Career Journey
          </p>

          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Professional Experience
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            My professional growth through hands-on development, collaboration,
            and real-world projects.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative space-y-8 before:absolute before:bottom-8 before:left-1.75 before:top-8 before:w-px before:bg-gray-200 dark:before:bg-gray-700 sm:space-y-10 sm:before:left-2.25">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 z-10 size-3.75 rounded-full border-4 sm:left-0.5 ${
                  index === 0
                    ? "border-violet-500 bg-white dark:border-violet-400 dark:bg-[#0B1220]"
                    : "border-gray-300 bg-white dark:border-gray-600 dark:bg-[#0B1220]"
                }`}
              />

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:bg-[#0F172A] dark:hover:border-violet-500/50 sm:p-7 md:p-8">
                {/* Date */}
                <div className="mb-5 flex items-center gap-2">
                  <CalendarDays
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-violet-600 dark:text-violet-400"
                  />
                  <span className="text-sm font-semibold tracking-wide text-violet-700 dark:text-violet-300">
                    {experience.dates}
                  </span>
                </div>

                {/* Role and company */}
                <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl">
                  {experience.role}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 text-gray-500 dark:text-gray-400"
                    />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {experience.company}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden text-gray-300 dark:text-gray-600 sm:inline"
                  >
                    |
                  </span>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin aria-hidden="true" size={15} className="shrink-0" />
                    <span>{experience.detail}</span>
                  </div>
                </div>

                {/* Responsibilities and achievements */}
                <div className="my-6 h-px bg-gray-100 dark:bg-gray-800" />

                <ul className="space-y-4">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.75 size-1.5 shrink-0 rounded-full bg-violet-500"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
