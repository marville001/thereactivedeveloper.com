import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { METADATAS } from "@/constants/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = METADATAS.home;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="martin">
      <Header />
      <div className="mt-32">{children}</div>

      <Footer />
    </main>
  );
}
