"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChevronDown, HiOutlineDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mennaomar777",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mennaomar777",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:mennaomar764@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const initialAnimation = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 24 };

  const visibleAnimation = { opacity: 1, y: 0 };

  const animationTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center
        overflow-hidden bg-linear-to-br from-white via-purple-50 to-white
        px-5 py-24 text-center
        dark:from-[#0B1220] dark:via-[#1a1f2e] dark:to-[#0B1220]
        sm:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute left-1/4 top-1/4 size-64 rounded-full
            bg-[#8B5CF6]/20 blur-3xl sm:size-72
            ${prefersReducedMotion ? "" : "animate-pulse"}`}
        />

        <div
          className={`absolute bottom-1/4 right-1/4 size-72 rounded-full
            bg-[#A78BFA]/15 blur-3xl sm:size-96
            ${prefersReducedMotion ? "" : "animate-pulse"}`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Main heading */}
        <motion.h1
          id="hero-heading"
          initial={initialAnimation}
          animate={visibleAnimation}
          transition={animationTransition}
          className="text-4xl font-bold tracking-tight
            text-gray-900 dark:text-gray-100
            sm:text-5xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span
            className="bg-linear-to-r from-[#8B5CF6] via-[#A78BFA]
              to-[#C4B5FD] bg-clip-text text-transparent
              dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]"
          >
            Menna Omar
          </span>
        </motion.h1>

        {/* Animated job title */}
        <motion.div
          initial={initialAnimation}
          animate={visibleAnimation}
          transition={{
            ...animationTransition,
            delay: prefersReducedMotion ? 0 : 0.15,
          }}
          className="mt-5 min-h-10 text-xl leading-snug
            text-gray-700 dark:text-gray-300
            sm:text-2xl md:mt-6 md:min-h-12 md:text-3xl"
        >
          <span
            aria-hidden="true"
            className="font-semibold text-[#8B5CF6] dark:text-[#A78BFA]"
          >
            {prefersReducedMotion ? (
              "Frontend Developer"
            ) : (
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1800,
                  "React & Next.js Developer",
                  1800,
                  "Building Clean UI Experiences",
                  1800,
                  "Crafting Interactive Web Apps",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
                cursor
              />
            )}
          </span>

          <span className="sr-only">
            Frontend Developer specializing in React and Next.js.
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={initialAnimation}
          animate={visibleAnimation}
          transition={{
            ...animationTransition,
            delay: prefersReducedMotion ? 0 : 0.3,
          }}
          className="mx-auto mt-5 max-w-2xl text-base leading-7
            text-gray-600 dark:text-gray-400
            sm:text-lg sm:leading-8"
        >
          I build responsive web applications with React and Next.js, backed by
          hands-on experience developing features in a production Vue.js
          application.
          <span className="mt-2 block">
            I focus on accessible interfaces, thoughtful user experiences, and
            maintainable frontend code.
          </span>
        </motion.p>

        {/* Call to action */}
        <motion.div
          initial={initialAnimation}
          animate={visibleAnimation}
          transition={{
            ...animationTransition,
            delay: prefersReducedMotion ? 0 : 0.45,
          }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center
              rounded-full bg-linear-to-r from-[#8B5CF6] to-[#A78BFA]
              px-7 py-3 font-semibold text-white
              shadow-sm transition-all duration-200
              hover:shadow-md hover:shadow-violet-500/20
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-violet-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-[#0B1220]"
          >
            View Projects
          </Link>

          <a
            href="/Menna_Omar_Frontend_Developer_CV.pdf"
            download
            className="inline-flex min-h-12 items-center justify-center
              gap-2 rounded-full border-2 border-[#8B5CF6]
              px-7 py-3 font-semibold text-[#8B5CF6]
              transition-colors duration-200
              hover:bg-violet-500/10
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-violet-500 focus-visible:ring-offset-2
              dark:border-[#A78BFA] dark:text-[#A78BFA]
              dark:hover:bg-violet-400/10
              dark:focus-visible:ring-offset-[#0B1220]"
          >
            <HiOutlineDownload size={20} aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.6,
          }}
          aria-label="Social media and contact links"
          className="mt-7 flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={
                label === "Email"
                  ? "Email Menna Omar"
                  : `Menna Omar on ${label} (opens in a new tab)`
              }
              className="flex size-11 items-center justify-center
                rounded-xl text-gray-600 transition-colors duration-200
                hover:bg-violet-500/10 hover:text-violet-600
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-violet-500
                dark:text-gray-400 dark:hover:text-violet-300"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          ))}
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About Me"
        initial={{ opacity: 0 }}
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                delay: 1.2,
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }
        }
        className="absolute bottom-5 flex size-11 items-center
          justify-center rounded-full text-[#8B5CF6]
          transition-colors hover:bg-violet-500/10
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-violet-500
          dark:text-[#A78BFA] sm:bottom-7"
      >
        <HiChevronDown size={30} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
