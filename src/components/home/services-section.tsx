"use client";

import { motion } from 'framer-motion';
import { Rocket, Globe, Smartphone, Code2, Layers, Zap } from 'lucide-react';

const services = [
	{
		icon: Rocket,
		title: "SaaS Development",
		description: "Build scalable, cloud-native applications that grow with your business. From MVP to enterprise-grade solutions.",
		features: ["Cloud Architecture", "Payment Integration", "Multi-tenancy", "API Development"],
		gradient: "from-primary to-purple-500",
	},
	{
		icon: Globe,
		title: "Web Development",
		description: "Modern, responsive websites and web applications using React, Next.js, and cutting-edge technologies.",
		features: ["React & Next.js", "TypeScript", "Tailwind CSS", "SEO Optimized"],
		gradient: "from-purple-500 to-accent",
	},
	{
		icon: Smartphone,
		title: "Mobile App Development",
		description: "Cross-platform mobile apps with React Native and Flutter. Native performance, single codebase.",
		features: ["React Native", "Flutter", "iOS & Android", "App Store Ready"],
		gradient: "from-accent to-pink-400",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const ServicesSection = () => {
	return (
		<section className="relative py-24 px-4 overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						Services
					</span>
					<h2 className="section-heading">
						What I <span className="gradient-text">Build</span>
					</h2>
					<p className="section-subheading">
						From concept to launch, I help startups and businesses bring their digital products to life with clean code and modern design.
					</p>
				</motion.div>

				{/* Services grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							variants={itemVariants}
							className="service-card h-full"
						>
							{/* Icon */}
							<div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6`}>
								<service.icon className="w-full h-full text-white" />
							</div>

							{/* Content */}
							<h3 className="text-xl font-bold mb-3">{service.title}</h3>
							<p className="text-muted-foreground mb-4">{service.description}</p>

							{/* Features */}
							<div className="flex flex-wrap gap-2 mt-auto">
								{service.features.map((feature) => (
									<span
										key={feature}
										className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground"
									>
										{feature}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Additional value props */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{[
						{ icon: Code2, label: "Clean Code", desc: "Maintainable & scalable" },
						{ icon: Layers, label: "Modern Stack", desc: "Latest technologies" },
						{ icon: Zap, label: "Fast Delivery", desc: "Agile development" },
					].map((item) => (
						<div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
							<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
								<item.icon className="w-6 h-6 text-primary" />
							</div>
							<div>
								<p className="font-semibold">{item.label}</p>
								<p className="text-sm text-muted-foreground">{item.desc}</p>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesSection;
