import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "My Portfolio",
  description: "Welcome to My (Martin Mwangi's) portfolio. Get to know more about me, my skills, and the projects I have worked on."
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
