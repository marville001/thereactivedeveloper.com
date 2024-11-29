import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";

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
