import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Contact Me - Martin Mwangi",
  description: "Contact Martin Mwangi (Marville001) for all your web development needs. Reach out to Martin Mwangi, a dedicated Frontend Developer specializing in React, Next.js, and Tailwind CSS. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery"
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
