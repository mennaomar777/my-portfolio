"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "contact"];

    let currentActive = "hero";

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let bestSection = currentActive;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            bestSection = entry.target.id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(bestSection);
          currentActive = bestSection;
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-120px 0px -30% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="relative flex justify-center items-center py-10 md:py-6 px-8 bg-white/70 dark:bg-[#111827]/98 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="absolute left-8 flex items-center">
        <Image
          src="/favicon.png"
          alt="MO Logo"
          width={42}
          height={42}
          priority
          className="rounded-full object-cover shrink-0"
        />
        <div className="text-2xl font-bold tracking-wide text-black dark:text-[#E5E7EB] font-[var(--font-poppins)]">
          <span className="text-[#8B5CF6]">Menna</span> Omar
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-10">
        <Link
          href="#hero"
          className={`relative group transition text-lg ${
            activeSection === "hero"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Home
          <span
            className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
              activeSection === "hero" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#about"
          className={`relative group transition text-lg ${
            activeSection === "about"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          About
          <span
            className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
              activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#projects"
          className={`relative group transition text-lg ${
            activeSection === "projects"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Projects
          <span
            className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
              activeSection === "projects" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#skills"
          className={`relative group transition text-lg ${
            activeSection === "skills"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Skills
          <span
            className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
              activeSection === "skills" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#contact"
          className={`relative group transition text-lg ${
            activeSection === "contact"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Contact
          <span
            className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
              activeSection === "contact" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="absolute right-8 hidden md:block p-3 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition cursor-pointer"
        aria-label="Toggle Dark/Light Mode"
      >
        {theme === "light" ? (
          <Moon size={22} className="text-gray-700" />
        ) : (
          <Sun size={22} className="text-gray-300" />
        )}
      </button>

      {/* Mobile */}
      <div className="absolute right-8 flex items-center gap-2 md:hidden">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition cursor-pointer"
          aria-label="Toggle Dark/Light Mode"
        >
          {theme === "light" ? (
            <Moon size={22} className="text-gray-700" />
          ) : (
            <Sun size={22} className="text-gray-300" />
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-full right-0 mt-2 w-48 bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
            }`}
          >
            {["hero", "about", "projects", "skills", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-left transition-all relative group capitalize ${
                    activeSection === section
                      ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
                  }`}
                >
                  {section === "hero"
                    ? "Home"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                      activeSection === section
                        ? "w-12"
                        : "w-0 group-hover:w-12"
                    }`}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
