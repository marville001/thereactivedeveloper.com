"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
	headline?: string;
	summary?: string;
	profileImage?: string;
}

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number; }) => (
	<motion.div
		className={`orb ${className}`}
		animate={{
			y: [0, -30, 0],
			x: [0, 15, 0],
		}}
		transition={{
			duration: 8,
			repeat: Infinity,
			delay,
			ease: "easeInOut",
		}}
	/>
);

export const HeroSection = ({ headline, summary, profileImage }: HeroSectionProps) => {
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
			{/* Animated background orbs */}
			<FloatingOrb className="orb-primary w-[500px] h-[500px] -top-48 -left-48" delay={0} />
			<FloatingOrb className="orb-accent w-[400px] h-[400px] -bottom-32 -right-32" delay={2} />
			<FloatingOrb className="orb-purple w-[300px] h-[300px] top-1/4 right-1/4" delay={4} />

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

			<div className="relative z-10 max-w-5xl mx-auto text-center">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
				>
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
					</span>
					<span className="text-sm text-muted-foreground">Available for new projects</span>
				</motion.div>

				{/* Main headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
				>
					<span className="block text-foreground">I Build</span>
					<span className="gradient-text-animated">
						SaaS & Mobile Apps
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
				>
					{summary || "Full-Stack Developer specializing in React, React Native, Flutter & Node.js. Turning ideas into scalable digital products."}
				</motion.p>

				{/* Profile image */}
				{profileImage && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.25 }}
						className="relative w-32 h-32 mx-auto mb-8"
					>
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-accent p-[3px] animate-spin-slow">
							<div className="w-full h-full rounded-full bg-background" />
						</div>
						<Image
							src={profileImage}
							alt="Profile"
							fill
							className="rounded-full object-cover p-1"
							priority
						/>
					</motion.div>
				)}

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Link href="/contact" className="btn-gradient">
						<span className="relative z-10">Start a Project</span>
					</Link>
					<Link href="/portfolio" className="btn-outline-gradient text-foreground">
						View My Work
					</Link>
				</motion.div>

				{/* Tech stack badges */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-wrap justify-center gap-3 mt-12"
				>
					{['React', 'Next.js', 'React Native', 'Flutter', 'Node.js', '.NET'].map((tech, i) => (
						<motion.span
							key={tech}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
							className="tech-badge"
						>
							{tech}
						</motion.span>
					))}
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
				>
					<motion.div className="w-1 h-2 bg-white/40 rounded-full" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
