import { customMetaDataGenerator } from '@/lib/customMetaDataGenerator';
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Smartphone, Zap, RefreshCw, Shield, Cloud, Bell } from "lucide-react";

export const metadata: Metadata = customMetaDataGenerator({
	title: "Mobile App Development - React Native & Flutter",
	description: "Professional mobile app development with React Native and Flutter. I build cross-platform iOS and Android apps with native performance. Hire a React Native or Flutter developer.",
	canonicalUrl: "https://thereactivedeveloper.com/services/mobile-app-development",
	keywords: [
		"mobile app development",
		"React Native developer",
		"React Native developer for hire",
		"hire React Native developer",
		"Flutter developer",
		"Flutter developer for hire",
		"hire Flutter developer",
		"cross-platform mobile apps",
		"iOS app development",
		"Android app development",
		"mobile app developer",
		"React Native app development",
		"Flutter app development",
	],
});

const features = [
	{
		icon: Smartphone,
		title: "Cross-Platform Development",
		description: "One codebase for iOS and Android. React Native or Flutter for maximum efficiency and native performance.",
	},
	{
		icon: Zap,
		title: "Native Performance",
		description: "60fps animations, smooth scrolling, and responsive touch interactions that feel truly native.",
	},
	{
		icon: RefreshCw,
		title: "Over-the-Air Updates",
		description: "Push updates instantly without app store approval. Fix bugs and add features in real-time.",
	},
	{
		icon: Shield,
		title: "Secure & Reliable",
		description: "Secure authentication, encrypted storage, and best practices for protecting user data.",
	},
	{
		icon: Cloud,
		title: "Backend Integration",
		description: "Seamless integration with REST APIs, GraphQL, Firebase, and custom backend services.",
	},
	{
		icon: Bell,
		title: "Push Notifications",
		description: "Engage users with targeted push notifications. Deep linking and rich notifications supported.",
	},
];

const techStack = [
	"React Native", "Flutter", "Expo", "TypeScript", "Redux",
	"Firebase", "AppCenter", "Fastlane", "iOS", "Android"
];

export default function MobileAppDevelopmentPage() {
	return (
		<main className="pt-24">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
						Mobile App Development
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						React Native & Flutter Expert
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						Cross-platform mobile apps with native performance. Build once, deploy everywhere – iOS and Android from a single codebase.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
						>
							Start Your App Project
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
						<Link
							href="/portfolio"
							className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
						>
							View Mobile Apps
						</Link>
					</div>
				</div>
			</section>

			{/* React Native vs Flutter */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center">Choose Your Technology</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-6 rounded-xl border border-white/10">
							<h3 className="text-xl font-bold mb-4">React Native</h3>
							<ul className="space-y-3 text-muted-foreground text-sm">
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>JavaScript/TypeScript ecosystem</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Share code with React web apps</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Large community & npm packages</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Expo for rapid development</span>
								</li>
							</ul>
						</div>

						<div className="p-6 rounded-xl border border-white/10">
							<h3 className="text-xl font-bold mb-4">Flutter</h3>
							<ul className="space-y-3 text-muted-foreground text-sm">
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Dart language - fast & expressive</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Beautiful native-like UI widgets</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Excellent performance</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-0.5">✓</span>
									<span>Growing Google ecosystem</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 border-t border-white/10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">What I Deliver</h2>
						<p className="text-muted-foreground max-w-xl mx-auto">
							Full-featured mobile apps ready for the App Store and Google Play.
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
					<h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
					<p className="text-muted-foreground mb-8">
						Hire a React Native or Flutter developer to bring your mobile app idea to life.
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
