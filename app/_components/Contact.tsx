"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    try {
      await emailjs.send(
        "service_8y68j2i",
        "template_o28140r",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "pwp8OxICUWXGyIPwq"
      );
      toast.success("Message sent!");
      reset();
    } catch (error) {
      toast.error("Message didn't send, please try again");
      console.log(error);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-16 bg-gray-50 dark:bg-[#0B1220]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
          Get In Touch
        </h2>
        <div className="mt-4 h-1.5 w-32 md:w-48 mx-auto rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-[#0F172A] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-white dark:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition`}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-white dark:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-white dark:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about web development. Feel free
              to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="mailto:mennaomar764@gmail.com"
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-105 hover:shadow-md transition-all duration-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827]"
            >
              <HiOutlineMail size={24} />
              mennaomar764@gmail.com
            </Link>

            <Link
              href="tel:+201119051584"
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-105 hover:shadow-md transition-all duration-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827]"
            >
              <HiOutlinePhone size={24} />
              +20 111 905 1584
            </Link>

            <div className="flex items-center gap-4 text-lg text-gray-700 dark:text-gray-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827] hover:shadow-md transition-all duration-300">
              <HiOutlineLocationMarker size={24} />
              Cairo, Egypt
            </div>
          </div>

          <div className="flex gap-6 pt-6">
            <Link
              href="https://github.com/mennaomar777"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mennaomar777"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
