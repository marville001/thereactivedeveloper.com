import Image from "next/image";
import { GitlabIcon as GitHub, ExternalLink } from "lucide-react";
import { notFound } from 'next/navigation';
import Markdoc, { renderers } from '@markdoc/markdoc';
import RichContent from '@/components/rich-content';

import { Badge } from "@/components/shared/badge";
import { keystaticReader } from '@/lib/keystatic';
import React from 'react';

export async function generateStaticParams() {
	const slugs = await keystaticReader.collections.projects.list();
	
	return slugs.map(slug => ({ slug: slug }));
}

export default async function ProjectDetails({
	params
}: {
	params: { slug: string; };
}) {

	const readProject = await keystaticReader.collections.projects.read(params.slug);
	if (!readProject) {
		return notFound();
	}

	const content = await readProject.content();
	const transformed = Markdoc.transform(content.node);

	return (
		<div className="min-h-screen ">
			<section
				style={{
					background: `url(${readProject.mainImage})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundAttachment: "fixed"
				}}
				className={"text-white"}>
				<div className="bg-black bg-opacity-85">
					<div className="max-w-[1200px] mx-auto px-4  py-10 md:py-20">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-5xl font-bold mb-6">{readProject.name}</h2>
							<p className="text-xl mb-8 leading-relaxed">{readProject.summary}</p>
							<div className="flex flex-wrap gap-4 mb-8">
								{readProject.techStack.map((tech) => (
									<Badge key={tech.name} variant="secondary" className="text-sm capitalize">
										{tech.name}
									</Badge>
								))}
								{readProject.languages.map((tech) => (
									<Badge key={tech} variant="secondary" className="text-sm capitalize">
										{tech}
									</Badge>
								))}
							</div>
							<div className="flex items-center gap-6">
								<a
									href={readProject.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
								>
									<GitHub className="w-5 h-5" />
									View on GitHub
								</a>
								<a
									href={readProject.website}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
								>
									<ExternalLink className="w-5 h-5" />
									Live Demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Project Details */}
			<section className="max-w-[1200px] mx-auto px-4 py-8">
				<div className="max-w-6xl mx-auto">
					<div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
						<div className="md:flex">
							<div className="md:flex-1 p-2 md:p-8">
								<div className='prose prose-strong:text-slate-200 prose-sm prose-headings:text-white prose-p:text-gray-300 text-gray-300'>
									{renderers.react(transformed, React, { components: {} })}
								</div>
							</div>

							<div className="md:flex-1 py-8 md:p-8 bg-gray-950">
								<h3 className="text-2xl font-semibold mb-4">Project Gallery</h3>
								<div className="grid grid-cols-2 gap-4">
									{readProject.images.map((image, index) => (
										<div
											key={index}
											className={`rounded-lg overflow-hidden shadow-md ${index % 3 === 0 ? "col-span-2" : ""}`}
										>
											<Image
												src={image || "/placeholder.svg"}
												alt={`Project image ${index + 1}`}
												width={600}
												height={400}
												priority
												className="object-cover"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

