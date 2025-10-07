import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Martin Mwangi - Software Engineer: .NET, NestJs, React, NextJs, NodeJs, PostgreSQL and MongoDB",
  description: "Discover the digital prowess of Martin Mwangi (Marville001), a dedicated Frontend Developer. Through the dynamic synergy of React, Next.js, and Tailwind CSS, Martin crafts flawless web experiences that captivate and engage. With a keen focus on user-centric design and backed by Express.js and Node.js expertise, Martin Mwangi brings your digital aspirations to life. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi."
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
