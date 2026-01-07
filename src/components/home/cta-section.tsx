"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export const CTASection = () => {
	return (
		<section className="relative py-24 px-4 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />

			{/* Decorative orbs */}
			<div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-30" />
			<div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl opacity-30" />

			<div className="relative z-10 max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					{/* Badge */}
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
						Ready to start?
					</span>

					{/* Main heading */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Let&apos;s Build Something
						<span className="block gradient-text-animated mt-2">Amazing Together</span>
					</h2>

					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
						Whether you need a SaaS platform, mobile app, or website, I&apos;m here to help turn your vision into reality.
					</p>

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
						<Link
							href="https://cal.com/marville001/30min"
							target="_blank"
							className="btn-gradient group"
						>
							<Calendar className="w-5 h-5 mr-2" />
							<span className="relative z-10">Schedule a Call</span>
							<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
						</Link>

						<Link
							href="/contact"
							className="btn-outline-gradient text-foreground flex items-center"
						>
							<MessageSquare className="w-5 h-5 mr-2" />
							Send a Message
						</Link>
					</div>

					{/* Trust indicators */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
					>
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-green-500" />
							<span>Quick Response</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-blue-500" />
							<span>Flexible Pricing</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-purple-500" />
							<span>Remote Worldwide</span>
						</div>
					</motion.div>
				</motion.div>

				{/* Hire for specific roles */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10"
				>
					<h3 className="text-lg font-semibold mb-4 text-center">Hire Me For</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{[
							"React Developer",
							"React Native Developer",
							"Flutter Developer",
							"Full Stack Developer",
							"Node.js Developer",
							"Next.js Expert",
							"SaaS Development",
							"Mobile App Development",
						].map((role) => (
							<span
								key={role}
								className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
							>
								{role}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
