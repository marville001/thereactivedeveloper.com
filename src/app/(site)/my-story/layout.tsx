import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "My Story",
  description: "Get to know my story, my journey, and the experiences that have shaped me into the developer I am today."
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
