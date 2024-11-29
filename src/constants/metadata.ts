import type { Metadata } from "next";

const title = "Martin Mwangi - Software Developer: Tailwind CSS React, Next.js, Nest.js, .NET Core, Node.js, Express.js, and MongoDB";
const description = "Discover the digital prowess of Martin Mwangi (Marville001), a dedicated Frontend Developer. Through the dynamic synergy of React, Next.js, and Tailwind CSS, Martin crafts flawless web experiences that captivate and engage. With a keen focus on user-centric design and backed by Express.js and Node.js expertise, Martin Mwangi brings your digital aspirations to life. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi.";

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
	},
	portfolio: {
		...DEFAULT_METADATA,
		title: "Martin Mwangi - Portfolio",
		metadataBase: new URL('https://thereactivedeveloper.com/portfolio'),
		description: "Explore the digital portfolio of Martin Mwangi, a dedicated Frontend Developer. Discover the dynamic synergy of React, Next.js, and Tailwind CSS, and witness the flawless web experiences crafted by Martin Mwangi. Elevate your online presence with web solutions that reflect elegance, speed, and functionality, all curated by the mastery of Martin Mwangi."
	},
	archive: {
		...DEFAULT_METADATA,
		title: "Martin Mwangi - Archive",
		metadataBase: new URL('https://thereactivedeveloper.com/archive'),
		description
	}
};

export const metadataKeywords = [
	"fullstack developer",
	"web developer",
	"software engineer",
	"MERN stack",
	"React developer",
	"Node.js engineer",
	"JavaScript specialist",
	"web application developer",
	"frontend developer",
	"backend developer",
	"cloud application architect",
	"REST API developer",
	"scalable web solutions",
	"responsive web design",
	"performance optimization",
	"database engineering",
	"microservices architecture",
	"web performance",
	"enterprise software",
	"modern web technologies",
	"software design",
	"agile development",
	"technical problem solver",
	"system integration",
	"cloud computing",
	"DevOps practices"
];