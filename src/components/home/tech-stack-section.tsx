"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = {
	"Frontend": [
		{ name: "React", icon: "/icons/react.jpeg" },
		{ name: "Next.js", icon: "/icons/react.jpeg" },
		{ name: "TypeScript", icon: "/icons/typescript.png" },
		{ name: "Tailwind CSS", icon: "/icons/tailwindcss.jpeg" },
	],
	"Mobile": [
		{ name: "React Native", icon: "/icons/react.jpeg" },
		{ name: "Flutter", icon: "/icons/responsive-design.png" },
	],
	"Backend": [
		{ name: "Node.js", icon: "/icons/nodejs.jpeg" },
		{ name: ".NET", icon: "/icons/csharp.png" },
		{ name: "GraphQL", icon: "/icons/graphql.png" },
		{ name: "PostgreSQL", icon: "/icons/mysql.png" },
	],
	"Cloud & Tools": [
		{ name: "AWS", icon: "/icons/aws.png" },
		{ name: "Docker", icon: "/icons/docker.png" },
		{ name: "Git", icon: "/icons/git.png" },
		{ name: "MongoDB", icon: "/icons/mongodb.jpeg" },
	],
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.4,
		},
	},
};

export const TechStackSection = () => {
	return (
		<section className="relative py-24 px-4 overflow-hidden">
			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
						Technologies
					</span>
					<h2 className="section-heading">
						Tech <span className="gradient-text">Stack</span>
					</h2>
					<p className="section-subheading">
						Modern technologies I use to build fast, scalable, and beautiful applications.
					</p>
				</motion.div>

				{/* Tech categories */}
				<div className="space-y-12">
					{Object.entries(techStack).map(([category, techs], categoryIndex) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
						>
							<h3 className="text-lg font-semibold text-muted-foreground mb-4 flex items-center gap-2">
								<span className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent" />
								{category}
							</h3>

							<motion.div
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
							>
								{techs.map((tech) => (
									<motion.div
										key={tech.name}
										variants={itemVariants}
										whileHover={{ scale: 1.05, y: -5 }}
										className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
									>
										<div className="flex flex-col items-center gap-3">
											<div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
												<Image
													src={tech.icon}
													alt={tech.name}
													width={40}
													height={40}
													className="object-contain"
												/>
											</div>
											<span className="text-sm font-medium text-center">{tech.name}</span>
										</div>

										{/* Hover glow effect */}
										<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Highlight mobile development */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 border border-white/10"
				>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold mb-2">Looking for a Mobile Developer?</h3>
							<p className="text-muted-foreground">
								Expertise in React Native and Flutter for cross-platform mobile applications.
							</p>
						</div>
						<a
							href="/contact"
							className="btn-gradient whitespace-nowrap"
						>
							<span className="relative z-10">Let&apos;s Talk</span>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStackSection;
