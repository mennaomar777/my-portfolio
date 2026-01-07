"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChevronDown, HiOutlineDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden
      bg-gradient-to-br from-white via-purple-50 to-white
      dark:from-[#0B1220] dark:via-[#1a1f2e] dark:to-[#0B1220] text-center px-4"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B5CF6]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A78BFA]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl w-full z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-gray-100"
        >
          Hi, I&apos;m{" "}
          <span
            className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] 
            dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9] bg-clip-text text-transparent"
          >
            Menna Omar
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 leading-snug mt-6"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React & Next.js Developer",
              1500,
              "Building Clean UI Experiences",
              1500,
              "Crafting Interactive Web Apps",
              1500,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="font-semibold text-[#8B5CF6] dark:text-[#A78BFA]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400 mt-4"
        >
          I build responsive and scalable interfaces using React, Next.js, and
          Tailwind CSS.
          <br />
          Focused on performance, accessibility, and great UX.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mt-6"
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]
            text-white font-medium rounded-full hover:shadow-sm hover:scale-105 transition-transform"
          >
            View Projects
          </Link>

          <a
            href="/Menna_Omar_Frontend_Developer_CV.pdf"
            download
            className="px-8 py-4 border-2 border-[#8B5CF6] dark:border-[#A78BFA]
            text-[#8B5CF6] dark:text-[#A78BFA] font-medium rounded-full flex items-center gap-2
            hover:bg-[#8B5CF6]/10 dark:hover:bg-[#A78BFA]/10 hover:shadow-sm hover:scale-105 transition-transform"
          >
            <HiOutlineDownload size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center mt-6"
        >
          <a
            href="https://github.com/mennaomar777"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] hover:scale-110 transition-transform"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/mennaomar777"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] hover:scale-110 transition-transform"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:mennaomar764@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] hover:scale-110 transition-transform"
          >
            <FaEnvelope size={28} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5,
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 cursor-pointer"
      >
        <HiChevronDown
          size={32}
          className="text-[#8B5CF6] dark:text-[#A78BFA]"
        />
      </motion.div>
    </section>
  );
}
