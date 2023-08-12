import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const title = "Martin Mwangi (Marville001) - Software Developer: React, Next.js, Tailwind CSS";

const description = "Discover the digital prowess of Martin Mwangi, a dedicated Frontend Developer. Through the dynamic synergy of React, Next.js, and Tailwind CSS, Martin crafts flawless web experiences that captivate and engage. With a keen focus on user-centric design and backed by Express.js and Node.js expertise, Martin Mwangi brings your digital aspirations to life. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    images: [
      "/me.png"
    ],
  },
  twitter: {
    title,
    description,
    images: [
      "/me.png"
    ],
    card: "summary_large_image",
  },
  alternates: {
    canonical: `https://thereactivedeveloper.com/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark" id="martin">{children}</body>
    </html>
  );
}
