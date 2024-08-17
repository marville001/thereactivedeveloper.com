import MyImage from "@/components/shared/my-image";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import ExperienceTimeline from "../(root)/experience-timeline";
import type { Metadata } from "next";
import { METADATAS } from "@/constants/metadata";

export const metadata: Metadata = METADATAS.about;

const Home = () => {
  return (
	  <section className="lg:py-4">
		  <div className="my-16 px-4 ">
			  <h1 className="text-center text-4xl my-8 font-sans font-bold tracking-wider text-dark dark:text-white">
				  Frontend, Backend Developer & Mentor
			  </h1>
			  <p className="my-6 text-xl text-center dark:text-white">I design and code beautifully simple things, and I love what I do.</p>

			  <MyImage />

			  <div className="flex justify-center">
				  <Link href={`/viewer?document=cv`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded px-6 py-2 hover:bg-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download My CV</Link>
			  </div>
		  </div>

		  <div className="mt-10 flex justify-center p-4 pb-0 ">
			  <Image height={500} width={600} src="/assets/hero-devices.svg" alt="" className='max-w-xl w-full' />
		  </div>

		  <div className="bg-dark p-4 py-8 md:py-16 dark:bg-dim-dark text-white">
			  <div className="mx-auto max-w-2xl py-12">
				  <div className="">
					  <h2 className="mb-6 text-center text-2xl font-bold">Hey Friends 👋, I&apos;m Martin. Nice to Meet You</h2>
					  <p className="max-w-[600px] mx-auto text-center text-lg">
						  I&apos;m{' '}
						  <strong className="text-base text-accent">Martin Mwangi</strong>.
						  I graduated with a bachelor&apos;s degree in Computer Science from {" "}
						  <Link className='text-blue-400 underline' href="https://www.dkut.ac.ke/" target="_blank" rel="noopener noreferrer">
							  Dedan Kimathi University Of technology
						  </Link>
						  . I&apos;m currently a Software Developer working with ReactJs,
						  Angular, NodeJs, GraphQl, Postgres, MongoDB and TypeScript.
					  </p>

					  <p className="max-w-[600px] mx-auto text-center py-4 text-lg ">
						  I&apos;m also learning some DevOps tools on AWS and Azure.
					  </p>

					  <p className="max-w-[600px] mx-auto text-lg text-center">
						  The main purpose of starting my own portfolio is to showcase my
						  projects, document my learning journey through blogs and also to
						  document the books am reading by writing book notes.{' '}
						  <i>I hope you get to check them out!</i>
					  </p>

					  <Link href="/my-story"  className="mt-5 block underline text-center rounded-lg px-4 font-semibold text-dark hover:text-accent dark:text-white dark:hover:text-accent lg:text-[15px]">
							  <span>Read My Story</span>
					  </Link>
				  </div>
			  </div>
		  </div>

		  <ExperienceTimeline />
	  </section>
  )
}

export default Home