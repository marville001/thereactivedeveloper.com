import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Palette, Gauge, Search, Monitor, Smartphone } from "lucide-react";

export const metadata: Metadata = customMetaDataGenerator({
	title: "Web Development Services",
	description: "Professional web development services using React, Next.js, and modern technologies. I build fast, responsive, and SEO-optimized websites and web applications. Hire a React developer today.",
	canonicalUrl: "https://thereactivedeveloper.com/services/web-development",
	keywords: [
		"web development services",
		"React developer for hire",
		"Next.js developer",
		"hire React developer",
		"frontend developer",
		"full stack web developer",
		"responsive web design",
		"SEO optimized websites",
		"modern web applications",
		"TypeScript developer",
	],
});

const features = [
	{
		icon: Code2,
		title: "Modern Tech Stack",
		description: "React, Next.js, TypeScript, and Tailwind CSS. Clean, maintainable code following best practices.",
	},
	{
		icon: Gauge,
		title: "Performance First",
		description: "Optimized for Core Web Vitals. Fast load times, lazy loading, and efficient bundle sizes.",
	},
	{
		icon: Search,
		title: "SEO Optimized",
		description: "Built with SEO in mind. Server-side rendering, meta tags, structured data, and sitemap generation.",
	},
	{
		icon: Monitor,
		title: "Responsive Design",
		description: "Pixel-perfect on all devices. Mobile-first approach with fluid layouts and adaptive components.",
	},
	{
		icon: Palette,
		title: "Custom Design",
		description: "Unique, branded designs that stand out. Modern aesthetics with attention to detail.",
	},
	{
		icon: Smartphone,
		title: "Progressive Web Apps",
		description: "Offline support, push notifications, and app-like experience on the web.",
	},
];

const techStack = [
	"React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
	"GraphQL", "REST APIs", "Vercel", "Netlify", "Prisma"
];

export default function WebDevelopmentPage() {
	return (
		<main className="pt-24">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
						Web Development
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Modern Web Applications
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						Beautiful, fast, and user-friendly websites and web applications built with React, Next.js, and cutting-edge technologies.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
						>
							Start Your Web Project
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
						<Link
							href="/portfolio"
							className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
						>
							View Web Projects
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">What You Get</h2>
						<p className="text-muted-foreground max-w-xl mx-auto">
							High-quality web development that drives results for your business.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
							>
								<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
									<feature.icon className="w-5 h-5 text-muted-foreground" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
								<p className="text-muted-foreground text-sm">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-bold mb-8">Technologies I Use</h2>
					<div className="flex flex-wrap justify-center gap-3">
						{techStack.map((tech) => (
							<span
								key={tech}
								className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">Let&apos;s Build Your Website</h2>
					<p className="text-muted-foreground mb-8">
						Get a modern, fast, and SEO-optimized website that converts visitors into customers.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
					>
						Get a Free Quote
					</Link>
				</div>
			</section>
		</main>
	);
}
