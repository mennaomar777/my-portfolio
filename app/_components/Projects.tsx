"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "aurastore",
    title: "AuraStore",
    description:
      "A responsive e-commerce application featuring product search, filtering, pagination, authentication, profile management, cart, wishlist, and cash or online checkout.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "Redux Toolkit",
      "REST APIs",
      "React Hook Form",
      "Zod",
    ],
    image: "/images/image7.png",
    live: "https://aura-store-xi-khaki.vercel.app/",
    github: "https://github.com/mennaomar777/AuraStore",
  },
  {
    id: "vibehub",
    title: "VibeHub",
    description:
      "A social platform built with Next.js and TypeScript, featuring posts, user interactions, and dynamic UI updates.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "MUI"],
    image: "/images/image6.png",
    live: "https://vibe-hub-5iyc.vercel.app/",
    github: "https://github.com/mennaomar777/VibeHub",
  },
  {
    id: "green-haven-react",
    title: "Green Haven",
    subtitle: "React Version",
    description:
      "A responsive hotel booking interface with a clean layout, reusable components, and interactive forms.",
    tech: [
      "React",
      "Styled Components",
      "React Query",
      "Supabase",
      "React Hook Form",
    ],
    image: "/images/image3.png",
    live: "https://green-haven-f62v.vercel.app/",
    github: "https://github.com/mennaomar777/Green-Haven",
  },
  {
    id: "green-haven-next",
    title: "Green Haven",
    subtitle: "Next.js Version",
    description:
      "A hotel booking platform built with the Next.js App Router, authentication, and animated user interfaces.",
    tech: ["Next.js", "App Router", "NextAuth", "Framer Motion"],
    image: "/images/image4.png",
    live: "https://green-haven-demo.vercel.app/",
    github: "https://github.com/mennaomar777/green-haven--next.js-",
  },
  {
    id: "fresh-cart",
    title: "Fresh Cart",
    description:
      "A single-page e-commerce application featuring user authentication, cart management, and payment integration.",
    tech: ["React", "Context API", "Tailwind CSS", "Formik", "Stripe"],
    image: "/images/image1.png",
    live: "https://e-commerce-web-app-gray.vercel.app/",
    github: "https://github.com/mennaomar777/E-Commerce-Web-App",
  },
  {
    id: "lms",
    title: "Learning Management System",
    description:
      "A responsive learning platform that helps users browse courses and follow their learning progress.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    image: "/images/image5.png",
    live: "https://lms-lilac-nu.vercel.app/",
    github: "https://github.com/omarabdo1414/LMS",
  },
  {
    id: "etoile-restaurant",
    title: "Etoile Restaurant",
    description:
      "A modern restaurant website featuring online ordering, table reservations, and interactive UI animations.",
    tech: ["React", "Tailwind CSS", "Context API", "Supabase"],
    image: "/images/image2.png",
    live: "https://etoile-restaurant-omega.vercel.app/",
    github: "https://github.com/mennaomar777/Etoile-Restaurant",
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const initialAnimation = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24 };

  const animationTransition = {
    duration: prefersReducedMotion ? 0 : 0.55,
    ease: "easeOut" as const,
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-gray-50 px-5 py-20 dark:bg-[#0B1220] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={initialAnimation}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={animationTransition}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6] dark:text-[#A78BFA]">
            My Work
          </p>

          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl"
          >
            Featured Projects
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-linear-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] sm:w-32"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            A selection of projects showcasing my experience building responsive
            and interactive web applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={initialAnimation}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                ...animationTransition,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
              }}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 dark:border-gray-700/70 dark:bg-[#0F172A] ${
                prefersReducedMotion
                  ? ""
                  : "hover:-translate-y-1 hover:shadow-xl"
              } hover:border-violet-300 dark:hover:border-violet-500/50`}
            >
              {/* Project image */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-500 ${
                    prefersReducedMotion ? "" : "group-hover:scale-105"
                  }`}
                />
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {"subtitle" in project && project.subtitle && (
                    <p className="mt-1 text-sm font-medium text-[#8B5CF6] dark:text-[#A78BFA]">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/* Technology tags */}
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-5 mb-6 flex flex-wrap gap-2"
                >
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-700 dark:text-violet-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-gray-100 pt-5 dark:border-gray-700/70">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo (opens in a new tab)`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-semibold text-gray-700 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:text-gray-300 dark:hover:text-violet-300 dark:focus-visible:ring-offset-[#0F172A]"
                  >
                    Live Demo
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-semibold text-gray-700 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:text-gray-300 dark:hover:text-violet-300 dark:focus-visible:ring-offset-[#0F172A]"
                  >
                    <Github size={17} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
