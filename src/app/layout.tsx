import { cn } from "@/lib/utils";
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/hero-devices.svg" />
      </head>
      <body className={cn("dark", openSans.className)}>
        {children}
      </body>
    </html>
  );
}
