import type { Metadata } from "next";

const title = "Martin Mwangi (Marville001) - Software Developer: React, Next.js, Tailwind CSS";

const description = "Discover the digital prowess of Martin Mwangi, a dedicated Frontend Developer. Through the dynamic synergy of React, Next.js, and Tailwind CSS, Martin crafts flawless web experiences that captivate and engage. With a keen focus on user-centric design and backed by Express.js and Node.js expertise, Martin Mwangi brings your digital aspirations to life. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi.";

const DEFAULT_METADATA = {
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title,
		description,
		images: [
			"/assets/me.jpg"
		],
	},
	twitter: {
		title,
		description,
		images: [
			"/assets/me.jpg"
		],
		card: "summary_large_image",
	},
	alternates: {
		canonical: `/`,
		languages: {
			'en-US': '/en-US'
		},
	},
};

export const METADATAS: Record<string, Metadata> = {
	home: {
		...DEFAULT_METADATA,
		metadataBase: new URL('https://thereactivedeveloper.com'),
		title,
		description,
	},
	about: {
		...DEFAULT_METADATA,
		metadataBase: new URL('https://thereactivedeveloper.com/about-me'),
		title,
		description,
	},
	viewer: {
		...DEFAULT_METADATA,
		title: "Martin Mwangi - Document Viewer",
		metadataBase: new URL('https://thereactivedeveloper.com/viewer'),
		description
	}
};