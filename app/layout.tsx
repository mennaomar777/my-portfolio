import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { MotionConfig } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-delta-rose-14.vercel.app"),
  title: "Menna Omar | Frontend Developer",
  description:
    "Menna Omar is a frontend developer building responsive web applications with React and Next.js, with professional experience in Vue.js.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Menna Omar | Frontend Developer",
    description:
      "Frontend developer building responsive web applications with React and Next.js, with professional experience in Vue.js.",
    url: "/",
    siteName: "Menna Omar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/my-img.JPG",
        alt: "Menna Omar, frontend developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menna Omar | Frontend Developer",
    description:
      "Frontend developer building responsive web applications with React and Next.js, with professional experience in Vue.js.",
    images: ["/my-img.JPG"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#8B5CF6",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#8B5CF6",
              },
            },
            error: {
              style: {
                background: "#ef4444",
                color: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
