"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
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
    const hero = document.getElementById("hero");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const skills = document.getElementById("skills");
    const contact = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (hero) observer.observe(hero);
    if (about) observer.observe(about);
    if (projects) observer.observe(projects);
    if (skills) observer.observe(skills);
    if (contact) observer.observe(contact);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white/70 dark:bg-[#111827]/98 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50">
      <div
        className="text-2xl font-bold tracking-wide
             text-black dark:text-[#E5E7EB]
             font-[var(--font-poppins)]"
      >
        <span className="text-[#8B5CF6]">Menna</span> Omar
      </div>

      {/* Desktop Navigation  */}
      <div className="hidden md:flex items-center justify-center flex-1 gap-10">
        <Link
          href="#hero"
          className={`relative group cursor-pointer transition text-lg ${
            activeSection === "hero"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Home
          <span
            className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
              activeSection === "hero"
                ? "w-full bg-[#8B5CF6] dark:bg-[#A78BFA]"
                : "w-0 bg-[#8B5CF6] group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#about"
          className={`relative group cursor-pointer transition text-lg ${
            activeSection === "about"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          About
          <span
            className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
              activeSection === "about"
                ? "w-full bg-[#8B5CF6] dark:bg-[#A78BFA]"
                : "w-0 bg-[#8B5CF6] group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#projects"
          className={`relative group cursor-pointer transition text-lg ${
            activeSection === "projects"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Projects
          <span
            className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
              activeSection === "projects"
                ? "w-full bg-[#8B5CF6] dark:bg-[#A78BFA]"
                : "w-0 bg-[#8B5CF6] group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#skills"
          className={`relative group cursor-pointer transition text-lg ${
            activeSection === "skills"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Skills
          <span
            className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
              activeSection === "skills"
                ? "w-full bg-[#8B5CF6] dark:bg-[#A78BFA]"
                : "w-0 bg-[#8B5CF6] group-hover:w-full"
            }`}
          />
        </Link>

        <Link
          href="#contact"
          className={`relative group cursor-pointer transition text-lg ${
            activeSection === "contact"
              ? "text-[#8B5CF6] dark:text-[#A78BFA]"
              : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
          }`}
        >
          Contact
          <span
            className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
              activeSection === "contact"
                ? "w-full bg-[#8B5CF6] dark:bg-[#A78BFA]"
                : "w-0 bg-[#8B5CF6] group-hover:w-full"
            }`}
          />
        </Link>
      </div>

      {/* Desktop Theme Toggle  */}
      <button
        onClick={toggleTheme}
        className="hidden md:block p-3 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition cursor-pointer"
        aria-label="Toggle Dark/Light Mode"
      >
        {theme === "light" ? (
          <Moon size={22} className="text-gray-700" />
        ) : (
          <Sun size={22} className="text-gray-300" />
        )}
      </button>

      {/* Mobile: Theme Toggle + Hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Theme Toggle */}
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

        {/* Hamburger Menu */}
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
            <Link
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-left transition-all relative group ${
                activeSection === "hero"
                  ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
              }`}
            >
              Home
              <span
                className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                  activeSection === "hero" ? "w-11" : "w-0 group-hover:w-11"
                }`}
              />
            </Link>

            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-left transition-all relative group ${
                activeSection === "about"
                  ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
              }`}
            >
              About
              <span
                className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                  activeSection === "about" ? "w-12" : "w-0 group-hover:w-12"
                }`}
              />
            </Link>

            <Link
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-left transition-all relative group ${
                activeSection === "projects"
                  ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
              }`}
            >
              Projects
              <span
                className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                  activeSection === "projects" ? "w-14" : "w-0 group-hover:w-15"
                }`}
              />
            </Link>

            <Link
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-left transition-all relative group ${
                activeSection === "skills"
                  ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
              }`}
            >
              Skills
              <span
                className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                  activeSection === "skills" ? "w-10" : "w-0 group-hover:w-10"
                }`}
              />
            </Link>

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-left transition-all relative group ${
                activeSection === "contact"
                  ? "text-[#8B5CF6] dark:text-[#A78BFA] font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
              }`}
            >
              Contact
              <span
                className={`absolute left-6 bottom-2 h-0.5 bg-[#8B5CF6] dark:bg-[#A78BFA] transition-all duration-300 ${
                  activeSection === "contact" ? "w-14" : "w-0 group-hover:w-15"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
