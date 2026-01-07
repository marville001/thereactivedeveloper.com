import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud, CreditCard, Users, Zap, Shield, BarChart3 } from "lucide-react";

export const metadata: Metadata = customMetaDataGenerator({
	title: "SaaS Development Services",
	description: "Expert SaaS development services. I build scalable, cloud-native SaaS applications with multi-tenancy, payment integration, and modern architecture. Hire a SaaS developer for your next project.",
	canonicalUrl: "https://thereactivedeveloper.com/services/saas-development",
	keywords: [
		"SaaS development",
		"SaaS developer for hire",
		"hire SaaS developer",
		"cloud-native applications",
		"multi-tenant architecture",
		"subscription billing integration",
		"SaaS MVP development",
		"scalable web applications",
		"SaaS platform development",
		"startup software development",
	],
});

const features = [
	{
		icon: Cloud,
		title: "Cloud-Native Architecture",
		description: "Built for the cloud from day one with AWS, Azure, or GCP. Auto-scaling, high availability, and disaster recovery built-in.",
	},
	{
		icon: Users,
		title: "Multi-Tenancy",
		description: "Secure data isolation for multiple customers. Database-per-tenant or shared database with row-level security.",
	},
	{
		icon: CreditCard,
		title: "Payment Integration",
		description: "Stripe, PayPal, or custom payment solutions. Subscription billing, usage-based pricing, and invoicing.",
	},
	{
		icon: Shield,
		title: "Security & Compliance",
		description: "SOC 2, GDPR, and HIPAA compliance ready. OAuth 2.0, SSO, and role-based access control.",
	},
	{
		icon: Zap,
		title: "Performance Optimized",
		description: "Fast load times, efficient caching, and optimized database queries for the best user experience.",
	},
	{
		icon: BarChart3,
		title: "Analytics & Reporting",
		description: "Built-in analytics dashboards, custom reports, and data export capabilities for your customers.",
	},
];

const techStack = [
	"React", "Next.js", "Node.js", "NestJS", ".NET", "PostgreSQL",
	"MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Stripe"
];

export default function SaasDevelopmentPage() {
	return (
		<main className="pt-24">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
						SaaS Development
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Build Your Next SaaS Platform
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						From MVP to enterprise-grade SaaS. I build scalable, secure, and feature-rich software-as-a-service applications that grow with your business.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
						>
							Start Your SaaS Project
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
						<Link
							href="/portfolio"
							className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
						>
							View SaaS Projects
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">What I Build</h2>
						<p className="text-muted-foreground max-w-xl mx-auto">
							Full-featured SaaS applications with everything you need to launch and scale.
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
					<h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS?</h2>
					<p className="text-muted-foreground mb-8">
						Let&apos;s discuss your idea and create a roadmap for your SaaS success.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
					>
						Get a Free Consultation
					</Link>
				</div>
			</section>
		</main>
	);
}
