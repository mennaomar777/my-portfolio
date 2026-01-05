"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Heart, Palette, Zap, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center px-6 md:px-16 pt-20 py-5 md:py-20 bg-white dark:bg-[#0B1220]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <div
          className="mt-4 h-1.5 w-28 md:w-36 mx-auto rounded-full
          bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]
          dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
            I'm{" "}
            <span className="font-semibold text-[#8B5CF6] dark:text-[#A78BFA]">
              Menna Omar
            </span>
            , a Frontend Developer who loves building modern, responsive, and
            user-focused web interfaces. I work mainly with React, Next.js, and
            Tailwind CSS, and I care deeply about clean code, performance, and
            UX.
          </p>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            Outside of coding, I enjoy exploring UI design trends and learning
            new technologies to continuously improve my work.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4 w-full max-w-md">
            {[
              { icon: <Code2 size={24} />, label: "Clean Code" },
              { icon: <Palette size={24} />, label: "Beautiful Design" },
              { icon: <Zap size={24} />, label: "Performance" },
              { icon: <Heart size={24} />, label: "Great UX" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1B1F2A] rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <div className="p-2 rounded-full bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 group-hover:bg-[#8B5CF6]/30 dark:group-hover:bg-[#A78BFA]/30 transition-all">
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-t-6"
        >
          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#8B5CF6]/20 dark:border-[#A78BFA]/20 shadow-2xl group">
            <Image
              src="/my-img.JPG"
              alt="Menna Omar"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-md pt-8"
          >
            <div className="flex items-center gap-4 ">
              <div className="p-3 rounded-full bg-[#8B5CF6]/10 dark:bg-[#A78BFA]/10 flex-shrink-0">
                <GraduationCap
                  size={26}
                  className="text-[#8B5CF6] dark:text-[#A78BFA]"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Education
              </h3>
            </div>

            <div className="ml-16">
              {" "}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                B.Sc. in Computer Engineering
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  Faculty of Engineering at Shoubra — Benha University
                </span>
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  Cairo, Egypt | Graduated 2025
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
