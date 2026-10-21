"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mennaomar777",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mennaomar777",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mennaomar764@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0B1220]">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand and copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              alt=""
              width={36}
              height={36}
              className="shrink-0 rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Menna Omar
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                © {year} · All rights reserved.
              </p>
            </div>
          </div>

          {/* Social links */}
          <nav aria-label="Social media" className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={
                  label === "Email"
                    ? "Email Menna Omar"
                    : `Visit Menna Omar on ${label} (opens in a new tab)`
                }
                className="flex size-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-800 dark:text-gray-300 dark:hover:border-violet-500/50 dark:hover:bg-[#111827] dark:hover:text-violet-300"
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            ))}
          </nav>

          {/* Back to top */}
          <Link
            href="#hero"
            className="group inline-flex items-center gap-2 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-gray-400 dark:hover:text-violet-300"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-full border border-gray-200 transition-colors group-hover:border-violet-300 group-hover:bg-violet-50 dark:border-gray-700 dark:group-hover:border-violet-500/50 dark:group-hover:bg-[#111827]">
              <ArrowUp size={16} aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Technology note */}
        <div className="mt-7 border-t border-gray-100 pt-5 text-center dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Designed & built with{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Next.js
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Tailwind CSS
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
