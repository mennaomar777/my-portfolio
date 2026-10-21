"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Code2, Heart, Palette, Zap, GraduationCap } from "lucide-react";

const strengths = [
  { icon: Code2, label: "Clean Code" },
  { icon: Palette, label: "UI & Design" },
  { icon: Zap, label: "Performance" },
  { icon: Heart, label: "User Experience" },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
      },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-5 py-20 dark:bg-[#0B1220] sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center md:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Get to know me
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            A little about my background, what I do, and what I value as a
            developer.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Text and strengths */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
              I&apos;m{" "}
              <span className="font-semibold text-violet-700 dark:text-violet-400">
                Menna Omar
              </span>
              , a Frontend Developer passionate about building modern,
              responsive, and user-focused web applications.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
              I mainly work with React, Next.js, and Tailwind CSS. I enjoy
              turning ideas into intuitive interfaces while paying attention to
              maintainable code, performance, and user experience.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">
              I&apos;m always looking to strengthen my skills, explore new
              technologies, and learn better ways to build reliable web
              experiences.
            </p>

            {/* Core values */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {strengths.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-gray-200/80 p-3.5 transition-colors hover:border-violet-300 dark:border-gray-800 dark:hover:border-violet-500/50"
                >
                  <Icon
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-violet-600 dark:text-violet-400"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait and education */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 flex flex-col items-center md:order-2"
          >
            <div className="relative size-56 overflow-hidden rounded-full border border-violet-200 bg-gray-100 shadow-xl shadow-violet-500/10 dark:border-violet-400/20 dark:bg-gray-800 sm:size-64 lg:size-72">
              <Image
                src="/my-img.JPG"
                alt="Portrait of Menna Omar"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Education */}
            <div className="mt-10 w-full max-w-sm rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-[#0F172A] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400">
                  <GraduationCap size={23} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Education
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Bachelor&apos;s Degree · 2025
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-medium leading-7 text-gray-800 dark:text-gray-200">
                  B.Sc. in Computer Engineering
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Faculty of Engineering at Shoubra
                  <br />
                  Benha University · Cairo, Egypt
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
