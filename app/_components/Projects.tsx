"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VibeHub",
    description:
      "A full-featured social platform with posts, interactions, and real-time UI updates, built using modern Next.js architecture.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "MUI"],
    image: "/images/image6.png",
    live: "https://vibe-hub-5iyc.vercel.app/",
    github: "https://github.com/mennaomar777/VibeHub",
  },
  {
    title: "Fresh Cart",
    description:
      "A fully functional single-page e-commerce application with authentication, cart management, and payment integration.",
    tech: ["React", "Context API", "Tailwind CSS", "Formik", "Stripe"],
    image: "/images/image1.png",
    github: "https://github.com/mennaomar777/E-Commerce-Web-App",
    live: "https://e-commerce-web-app-gray.vercel.app/",
  },
  {
    title: "Green Haven (React)",
    description:
      "A clean and responsive hotel booking interface focused on smooth UI interactions and accessibility.",
    tech: [
      "React",
      "Styled Components",
      "React Query",
      "Supabase",
      "React Hook Form",
    ],
    image: "/images/image3.png",
    github: "https://github.com/mennaomar777/Green-Haven",
    live: "https://green-haven-f62v.vercel.app/",
  },
  {
    title: "Green Haven (Next.js)",
    description:
      "A dynamic hotel booking platform built with Next.js App Router and modern server features.",
    tech: ["Next.js", "App Router", "NextAuth", "Framer Motion"],
    image: "/images/image4.png",
    github: "https://github.com/mennaomar777/green-haven--next.js-",
    live: "https://green-haven-demo.vercel.app/",
  },
  {
    title: "Learning Management System",
    description:
      "A responsive LMS platform that enables users to browse courses and track learning progress efficiently.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind"],
    image: "/images/image5.png",
    github: "https://github.com/omarabdo1414/LMS",
    live: "https://lms-lilac-nu.vercel.app/",
  },

  {
    title: "Etoile Restaurant",
    description:
      "A modern restaurant website featuring online ordering, table reservations, and smooth UI animations.",
    tech: ["React", "Tailwind CSS", "Context API", "Supabase"],
    image: "/images/image2.png",
    github: "https://github.com/mennaomar777/Etoile-Restaurant",
    live: "https://etoile-restaurant-omega.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0B1220]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Featured Projects
        </h2>
        <div className="mt-4 h-1.5 w-40 md:w-48 mx-auto rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]" />
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white dark:bg-[#0F172A] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] dark:bg-[#A78BFA]/10 dark:text-[#A78BFA]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 text-md font-medium 
               text-gray-600 
               hover:text-gray-900 
               dark:text-gray-400 
               dark:hover:text-gray-200 
               transition-colors"
                >
                  Live Demo <ExternalLink size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-md font-medium 
               text-gray-600 
               hover:text-gray-900 
               dark:text-gray-400 
               dark:hover:text-gray-200 
               transition-colors"
                >
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
