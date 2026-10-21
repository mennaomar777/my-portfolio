"use client";

import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Loader2,
  Send,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const contactItems = [
  {
    label: "Email",
    value: "mennaomar764@gmail.com",
    href: "mailto:mennaomar764@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+20 111 905 1584",
    href: "tel:+201119051584",
    icon: Phone,
  },
];

const socials = [
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
];

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15 dark:border-gray-700 dark:bg-[#111827] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-violet-400";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

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
        "pwp8OxICUWXGyIPwq",
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      toast.error("Message couldn't be sent. Please try again.");
    }
  }

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gray-50 px-5 py-20 dark:bg-[#0B1220] sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            Have a project in mind or an opportunity to discuss? I&apos;d love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Contact form */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#0F172A] sm:p-8 md:p-9"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Send a Message
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Fill out the form and I&apos;ll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              aria-busy={isSubmitting}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  {...register("name", {
                    required: "Please enter your name.",
                    maxLength: {
                      value: 100,
                      message: "Name must be 100 characters or fewer.",
                    },
                  })}
                  className={`${fieldClass} ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                      : ""
                  }`}
                />

                {errors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  {...register("email", {
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className={`${fieldClass} ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                      : ""
                  }`}
                />

                {errors.email && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me a little about your message..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  {...register("message", {
                    required: "Please enter your message.",
                    maxLength: {
                      value: 5000,
                      message: "Message must be 5000 characters or fewer.",
                    },
                  })}
                  className={`${fieldClass} min-h-36 resize-y ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                      : ""
                  }`}
                />

                {errors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-violet-500 dark:hover:bg-violet-600 dark:focus-visible:ring-offset-[#0F172A]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-7 lg:pt-3"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Let&apos;s Talk
              </h3>

              <p className="mt-3 text-base leading-8 text-gray-600 dark:text-gray-400">
                I&apos;m open to discussing frontend development opportunities,
                interesting projects, and ideas around building better web
                experiences. Feel free to reach out.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-gray-200/80 bg-white p-4 transition-colors hover:border-violet-300 hover:bg-violet-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-800 dark:bg-[#0F172A] dark:hover:border-violet-500/50 dark:hover:bg-[#111827]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-gray-500 dark:text-gray-400">
                      {label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-gray-800 group-hover:text-violet-700 dark:text-gray-200 dark:group-hover:text-violet-300 sm:text-base">
                      {value}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="shrink-0 text-gray-400 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400"
                  />
                </Link>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-200/80 p-4 dark:border-gray-800">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400">
                <MapPin size={20} aria-hidden="true" />
              </span>

              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                  Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Find me online
              </p>

              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile (opens in a new tab)`}
                    className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-800 dark:bg-[#0F172A] dark:text-gray-300 dark:hover:border-violet-500/50 dark:hover:bg-[#111827] dark:hover:text-violet-300"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
