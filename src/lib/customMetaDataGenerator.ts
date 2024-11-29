
import { metadataKeywords } from '@/constants/metadata';
import { Metadata } from "next";

interface PageSEOProps {
	title: string;
	description?: string;
	canonicalUrl?: string;
	ogType?: "website" | "article" | "book";
	ogImage?: string;
	twitterCard?: "summary_large_image" | "summary" | "player" | "app" | undefined;
	keywords?: string[];
}

export function customMetaDataGenerator({
	title,
	description = "Welcome to our store",
	canonicalUrl = 'https://thereactivedeveloper.com',
	ogType = "website",
	ogImage = "https://thereactivedeveloper.com/assets/me.jpg",
	twitterCard = "summary_large_image",
	keywords = ["next.js", "Nextjs", "React", "React.js", "Tailwind CSS", "TypeScript", "GraphQL", "NodeJs",  "Postgres", "MongoDB", "AWS", "Azure", "DevOps", "Mentor", ...metadataKeywords],
}: PageSEOProps): Metadata {

	const siteTitle = "Martin Mwangi (Marville001)";
	const fullTitle = `${title} | ${siteTitle}`;

	return {
		title: fullTitle,
		description,
		applicationName: siteTitle,
		keywords: keywords.join(", "),
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title: fullTitle,
			description,
			type: ogType,
			url: canonicalUrl,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: twitterCard,
			title: fullTitle,
			description,
			images: [ogImage],
		},
		icons: {
			icon: "/favicon.ico",
			apple: "/apple-touch-icon.png",
		},
	};
}