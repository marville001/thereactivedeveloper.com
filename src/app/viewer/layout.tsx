import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Documents Viewer",
  description: "View document uploaded by Martin Mwangi (Marville001). Made with love and passion for web development."
});

const Layout = ({children}: Children) => {
  return (
      <>{children}</>
  );
}
export default Layout;
