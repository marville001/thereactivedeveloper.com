import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "SaaS Developer | React, React Native, Flutter Expert",
  description: "Martin Mwangi is a Full-Stack Developer specializing in SaaS platforms, React Native & Flutter mobile apps, and modern web applications. Available for hire for React, Next.js, Node.js, and cross-platform mobile development projects."
});

const Layout = ({ children }: Children) => {
  return (
    <>{children}</>
  );
};
export default Layout;
