import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Kumar | Frontend Developer",
  description:
    "Frontend Developer building fast, modern, responsive and user-friendly web experiences using React and Next.js.",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Web Accessibility",
    "Performance Optimization",
    "Modern Web Development",
    "Progressive Web Apps",
    "Shiva Kumar",
  ],
  authors: [{ name: "Shiva Kumar" }],
  creator: "Shiva Kumar",
  openGraph: {
    title: "Shiva Kumar - Web Developer Portfolio",
    description:
      "Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.",
    url: "https://shiva-portfolio-alpha.vercel.app/",
    siteName: "Shiva Kumar - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiva Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva kumar | Frontend Developer",
    description:
      "Frontend Developer building fast, modern and responsive web experiences.",
    creator: "@yourusername",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
