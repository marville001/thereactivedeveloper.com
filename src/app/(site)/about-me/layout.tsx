import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "About Me",
  description: "Martin Mwangi (Marville001) is a dedicated Frontend Developer with a passion for crafting flawless web experiences. Discover the digital prowess of Martin Mwangi, a developer who specializes in React, Next.js, and Tailwind CSS. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi."
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
