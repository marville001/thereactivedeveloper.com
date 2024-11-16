import MyImage from "@/components/shared/my-image";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import ExperienceTimeline from "../(root)/experience-timeline";
import type { Metadata } from "next";
import { METADATAS } from "@/constants/metadata";
import { keystaticReader } from '@/lib/keystatic';
import Markdoc, { RenderableTreeNode } from '@markdoc/markdoc';

export const metadata: Metadata = METADATAS.about;

const Home = async () => {

	const settings = await keystaticReader.singletons.settings.read();

	let showAbout = true;
	let aboutContent: RenderableTreeNode | null = null;
	if (settings?.about) {
		const node = await settings?.about();
		const errors = Markdoc.validate(node?.node);
		if (errors.length) {
			showAbout = false;
		} else {
			aboutContent = Markdoc.transform(node?.node);
		}
	}


	return (
		<section className="lg:py-4">
			<div className="my-16 px-4 ">
				<h1 className="text-center text-4xl my-8 font-sans font-bold tracking-wider text-dark dark:text-white">
					{settings?.headline}
				</h1>
				<p className="my-6 text-xl text-center dark:text-white">
					{settings?.summary}
				</p>
				<MyImage url={settings?.profileImage ?? ""} />

				<div className="flex justify-center">
					<Link href={`/viewer?document=cv`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded px-6 py-2 hover:bg-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download My CV</Link>
				</div>
			</div>

			<div className="mt-10 flex justify-center p-4 pb-0 ">
				<Image height={500} width={600} src="/assets/hero-devices.svg" alt="" className='max-w-xl w-full' />
			</div>

			{showAbout &&
				<div className="bg-dark p-4 py-8 md:py-16 dark:bg-dim-dark text-white">

					<div className="mx-auto max-w-2xl py-12">
						{/* About Me */}
						<article className='content'>
							{Markdoc.renderers.react(aboutContent, React)}
						</article>

						<Link href="/my-story" className="mt-5 block underline text-center rounded-lg px-4 font-semibold text-dark hover:text-accent dark:text-white dark:hover:text-accent lg:text-[15px]">
							<span>Read My Story</span>
						</Link>
					</div>
				</div>
			}

			<ExperienceTimeline />
		</section>
	);
};

export default Home;