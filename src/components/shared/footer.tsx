import { keystaticReader } from '@/lib/keystatic';
import Image from "next/image";
import Link from "next/link";

export const Footer = async ({ showInterest = true }) => {
  const settings = await keystaticReader.singletons.settings.read();
  return (
    <footer className="bg-background border-t border-white/5">
      {/* Main footer content */}
      {showInterest && (
        <div className="max-w-screen-lg mx-auto py-16 px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  height={40}
                  width={40}
                  className="rounded-full"
                  src="/assets/logo.png"
                  alt="Martin Mwangi"
                />
                <span className="font-bold text-lg">Martin Mwangi</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-md mb-4">
                Full-Stack Developer specializing in SaaS platforms, React Native & Flutter mobile apps, and modern web applications.
              </p>
              <Link
                target="_blank"
                href="https://cal.com/marville001/30min"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/saas-development" className="hover:text-foreground transition-colors">
                    SaaS Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="hover:text-foreground transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="hover:text-foreground transition-colors">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/product-launch" className="hover:text-foreground transition-colors">
                    Product Launch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hire Me For */}
            <div>
              <h4 className="font-semibold mb-4">Hire Me For</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "React Developer",
                  "React Native Dev",
                  "Flutter Developer",
                  "Node.js Dev",
                  "Full Stack Dev",
                  "Next.js Expert",
                ].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-muted-foreground hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-lg mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Martin Mwangi. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={settings?.social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={settings?.social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={settings?.social?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <Link
                href={`mailto:${settings?.contact?.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
