"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111827] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <Link
            href="https://github.com/mennaomar777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-110 transition"
          >
            <FaGithub size={28} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mennaomar777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-110 transition"
          >
            <FaLinkedin size={28} />
          </Link>

          <Link
            href="mailto:mennaomar764@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-110 transition"
          >
            <FaEnvelope size={28} />
          </Link>
        </div>

        <div className="text-center md:text-right text-sm text-gray-600 dark:text-gray-400">
          Menna Omar © {new Date().getFullYear()} • Built with{" "}
          <span className="font-semibold">Next.js</span> &{" "}
          <span className="font-semibold">Tailwind CSS</span> ❤️
        </div>

        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm
                     text-gray-500 dark:text-gray-400
                     hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]
                     transition group"
        >
          <span
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                       group-hover:border-[#8B5CF6] dark:group-hover:border-[#A78BFA]
                       transition"
          >
            <FaArrowUp size={14} />
          </span>
          <span className="font-medium">Back to top</span>
        </Link>
      </div>
    </footer>
  );
}
