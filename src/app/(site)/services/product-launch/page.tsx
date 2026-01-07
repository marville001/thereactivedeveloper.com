import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rocket, Target, Users, BarChart, Lightbulb, Clock } from "lucide-react";

export const metadata: Metadata = customMetaDataGenerator({
	title: "Product Launch & MVP Development",
	description: "Fast MVP development and product launch services. I help startups build and launch their minimum viable product quickly. From idea to market in weeks, not months.",
	canonicalUrl: "https://thereactivedeveloper.com/services/product-launch",
	keywords: [
		"MVP development",
		"product launch",
		"startup developer",
		"MVP developer for hire",
		"minimum viable product",
		"rapid prototyping",
		"startup software development",
		"product development",
		"idea to MVP",
		"launch your product",
		"tech startup development",
	],
});

const features = [
	{
		icon: Lightbulb,
		title: "Idea Validation",
		description: "Validate your idea before investing heavily. Quick prototypes to test market fit and gather user feedback.",
	},
	{
		icon: Clock,
		title: "Rapid Development",
		description: "Go from concept to launch in weeks. Agile sprints focused on core features that matter.",
	},
	{
		icon: Target,
		title: "Feature Prioritization",
		description: "Focus on what matters. We identify and build the essential features that define your MVP.",
	},
	{
		icon: Users,
		title: "User-Centric Design",
		description: "Design that users love. Clean interfaces and intuitive user experiences that drive engagement.",
	},
	{
		icon: Rocket,
		title: "Launch Support",
		description: "Full support for your launch. Deployment, monitoring, and quick iterations based on user feedback.",
	},
	{
		icon: BarChart,
		title: "Growth-Ready",
		description: "Built to scale. Architecture that grows with your user base without costly rewrites.",
	},
];

const process = [
	{ step: "01", title: "Discovery", description: "Understand your vision, target users, and core features" },
	{ step: "02", title: "Design", description: "Create wireframes and UI designs for key screens" },
	{ step: "03", title: "Develop", description: "Build your MVP with clean, scalable code" },
	{ step: "04", title: "Launch", description: "Deploy, test, and launch to your first users" },
];

export default function ProductLaunchPage() {
	return (
		<main className="pt-24">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
						Product Launch
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Launch Your MVP in Weeks
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						Stop planning, start shipping. I help startups and entrepreneurs build and launch their minimum viable product quickly and efficiently.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
						>
							Launch Your Product
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
						<Link
							href="/portfolio"
							className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
						>
							View Past Launches
						</Link>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center">From Idea to Launch</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{process.map((item, index) => (
							<div key={item.step} className="relative">
								<div className="text-4xl font-bold text-white/10 mb-2">{item.step}</div>
								<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-muted-foreground">{item.description}</p>
								{index < process.length - 1 && (
									<div className="hidden lg:block absolute top-4 right-0 translate-x-1/2 text-white/20">
										→
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">Why Work With Me</h2>
						<p className="text-muted-foreground max-w-xl mx-auto">
							I&apos;ve helped startups go from idea to launched product with speed and quality.
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

			{/* Pricing Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl font-bold mb-6">Flexible Engagement</h2>
					<p className="text-muted-foreground mb-8">
						MVP sprints starting from 4-6 weeks. Fixed price or hourly – whatever works for your budget and timeline.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="px-6 py-4 rounded-xl border border-white/10">
							<p className="text-sm text-muted-foreground mb-1">Starting from</p>
							<p className="text-2xl font-bold">$5,000</p>
						</div>
						<div className="px-6 py-4 rounded-xl border border-white/10">
							<p className="text-sm text-muted-foreground mb-1">Timeline</p>
							<p className="text-2xl font-bold">4-8 weeks</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
					<p className="text-muted-foreground mb-8">
						Let&apos;s discuss your idea and create a roadmap to get your product to market.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
					>
						Schedule a Discovery Call
					</Link>
				</div>
			</section>
		</main>
	);
}
