"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Restore the saved theme after mounting.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Toggle and persist the selected theme.
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Track the section currently visible on screen.
  useEffect(() => {
    const sectionElements = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const getLinkClass = (id: string) =>
    `relative py-2 text-base font-medium transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-violet-500 focus-visible:ring-offset-4
    dark:focus-visible:ring-offset-[#111827]
    ${
      activeSection === id
        ? "text-violet-600 dark:text-violet-400"
        : "text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
    }`;

  const renderUnderline = (id: string) => (
    <span
      aria-hidden="true"
      className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full
      bg-[#8B5CF6] transition-transform duration-200
      origin-left dark:bg-[#A78BFA]
      ${
        activeSection === id
          ? "scale-x-100"
          : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );

  const themeButton = (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="flex size-10 cursor-pointer items-center justify-center rounded-full
        text-gray-700 transition-colors hover:bg-gray-100
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-violet-500
        dark:text-gray-300 dark:hover:bg-gray-800"
    >
      {theme === "light" ? (
        <Moon size={21} aria-hidden="true" />
      ) : (
        <Sun size={21} aria-hidden="true" />
      )}
    </button>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-gray-200/70
        bg-white/90 px-4 py-4 backdrop-blur-md
        dark:border-gray-800/70 dark:bg-[#111827]/95
        sm:px-6 md:px-8 md:py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* Brand */}
        <Link
          href="#hero"
          aria-label="Menna Omar, home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2 rounded-lg
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-violet-500"
        >
          <Image
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="shrink-0 rounded-full object-cover"
          />

          <span
            className="whitespace-nowrap
            text-lg font-bold tracking-wide text-gray-900
            dark:text-gray-100 sm:text-xl"
          >
            <span className="text-[#8B5CF6]">Menna</span> Omar
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 xl:gap-6">
          {navLinks.map(({ label, id }) => (
            <Link
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={`${getLinkClass(id)} group`}
            >
              {label}
              {renderUnderline(id)}
            </Link>
          ))}
        </div>

        {/* Desktop theme toggle */}
        <div className="hidden lg:flex">{themeButton}</div>

        {/* Mobile controls */}
        <div className="relative flex shrink-0 items-center gap-1 lg:hidden">
          {themeButton}

          <button
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center
              rounded-full text-gray-700 transition-colors
              hover:bg-gray-100 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-violet-500
              dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {menuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>

          {/* Mobile dropdown */}
          <div
            id="mobile-navigation"
            aria-hidden={!menuOpen}
            inert={!menuOpen}
            className={`absolute right-0 top-full mt-3 w-56
              overflow-hidden rounded-xl border border-gray-200
              bg-white shadow-lg transition-all duration-200
              dark:border-gray-800 dark:bg-[#0F172A]
              ${
                menuOpen
                  ? "visible max-h-96 translate-y-0 py-2 opacity-100"
                  : "invisible max-h-0 -translate-y-2 py-0 opacity-0"
              }`}
          >
            {navLinks.map(({ label, id }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`block border-l-2 px-5 py-3 text-sm
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-inset focus-visible:ring-violet-500
                  ${
                    activeSection === id
                      ? "border-violet-500 bg-violet-500/5 font-semibold text-violet-600 dark:border-violet-400 dark:text-violet-400"
                      : "border-transparent text-gray-700 hover:bg-gray-50 hover:text-violet-600 dark:text-gray-300 dark:hover:bg-gray-800/70 dark:hover:text-violet-400"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
