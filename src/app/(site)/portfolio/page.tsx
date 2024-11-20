import Image from "next/image";
import Link from "next/link";
import React from 'react';
import type { Metadata } from "next";
import { METADATAS } from "@/constants/metadata";
import { Github, Globe, Link2 } from "lucide-react";
import AnimatedSection from '@/components/animated-section';
import { keystaticReader } from '@/lib/keystatic';

export const metadata: Metadata = METADATAS.portfolio;

const MyPortfolio = async () => {
	const readProjects = (await keystaticReader.collections.projects.all());
	const allProjects = readProjects.sort((a, b) => (a.entry.order??0) - (b.entry.order??0))

	return (
		<section className="lg:py-4">
			<AnimatedSection delay={0}>
				<div className="md-px-6 mx-auto max-w-[1200px] py-10 px-2 sm:px-4">
					<h1 className="text-center text-4xl font-light text-white">
						Welcome to My Portfolio
					</h1>
					<div className="flex justify-center">
						<p className="my-5 max-w-[500px] text-center text-sm text-gray-200">
							Take a look of some of the awesome projects project I have been
							working on since I started learning programming. To View the full
							list, click archive button bellow.
						</p>
					</div>
					<div className="flex justify-center">
						<Link href="/archive" className="rounded-md bg-dark dark:bg-accent hover:bg-accent py-1.5 px-6 text-white">
							View Archive
						</Link>
					</div>
				</div>
			</AnimatedSection>

			<AnimatedSection delay={0.2}>
				<div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
			</AnimatedSection>

			<div className="container  py-12">

				{/* Portfolios */}
				<div className="grid grid-cols-1 gap-6 gap-y-8 py-12 max-w-[1200px] mx-auto sm:grid-cols-2 lg:grid-cols-3 ">
					{allProjects?.map((project, i) => (
						<AnimatedSection
							key={project.slug}
							delay={0.3+ i * 0.1}
						>
							<div
								className="min-h-[225pxs] group bg-opacity-40 hover:bg-opacity-100 justify-center
                      rounded-xl duration-150 ease-linearflex flex-col items-center"
							>
								<Link href={`/portfolio/${project.slug}`}>
									<Image
										width={250}
										height={750}
										objectFit='fill'
										className='rounded-lg border h-auto md:!h-52 !w-full'
										src={project.entry.mainImage}
										alt={project.entry.name}
									/>
								</Link>

								<div className="p-4">
									<Link href={`/portfolio/${project.slug}`} className='hover:underline'>
										<h2 className="text-xl font-semibold mb-2">{project.entry.name}</h2>
									</Link>
									<p className="text-muted-foreground mt-2">{project.entry.summary}</p>
									<div className="flex flex-wrap gap-2 mt-2 mb-4">
										{project.entry.techStack.map((tech) => (
											<span
												key={tech.name}
												className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
											>
												{tech.name}
											</span>
										))}
										{project.entry.languages.map((lang) => (
											<span
												key={lang}
												className="px-3 capitalize py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
											>
												{lang}
											</span>
										))}
									</div>
									<div className="flex gap-4">
										<a
											href={project.entry.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-muted-foreground hover:text-primary transition-colors"
										>
											<Github className="h-5 w-5 mr-1" />
											Code
										</a>
										<a
											href={project.entry.website}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-muted-foreground hover:text-primary transition-colors"
										>
											<Globe className="h-5 w-5 mr-1" />
											Demo
										</a>
									</div>
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>
				{/*  */}
			</div>

		</section>
	);
};

export default MyPortfolio;