import Image from "next/image";
import Link from "next/link";
import React from 'react';
import type { Metadata } from "next";
import { METADATAS } from "@/constants/metadata";
import { Github, Link2 } from "lucide-react";

export const metadata: Metadata = METADATAS.portfolio;

const MyPortfolio = () => {

	const projects: IProject[] = [];

	return (
		<section className="lg:py-4">
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

			<div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

			<div className="container  py-12">

				{/* Portfolios */}
				<div className="grid grid-cols-1 gap-6 gap-y-8 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
					{projects?.map(({ id, title, images, github, website, summary }: IProject) => (
						<div
							key={id}
							className="min-h-[225pxs] group bg-opacity-40 hover:bg-opacity-100 justify-center
                      rounded-xl duration-150 ease-linearflex flex-col items-center">
							<Image
								width={250}
								height={750}
								objectFit='fill'
								className='rounded-lg border h-auto md:!h-52 !w-full'
								src={images[0]}
								alt={title}
							/>
							<h4 className='self-start mt-4 dark:text-white'>{summary}</h4>

							<div className="flex justify-between items-center">
								<a href={website} target="_blank" rel="noopener noreferrer"
									className='bg-primary text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg'>
									<Link2 className='text-base' />
									<span className='font-light'>{website?.toString().replace("https://", "")}</span>
								</a>
								<a href={github} target="_blank" rel="noopener noreferrer">
									<Github className='text-2xl opacity-50 hover:opacity-100 cursor-pointer' />
								</a>

							</div>
						</div>
					))}
				</div>



				{/*  */}
			</div>

		</section>
	);
};

export default MyPortfolio;