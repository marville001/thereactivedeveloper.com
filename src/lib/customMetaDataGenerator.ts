
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
	description = "Martin Mwangi is a Full-Stack Developer specializing in SaaS development, React Native & Flutter mobile apps, and modern web applications. Hire me for React, Next.js, Node.js, and cross-platform mobile development projects.",
	canonicalUrl = 'https://thereactivedeveloper.com',
	ogType = "website",
	ogImage = "https://thereactivedeveloper.com/assets/me.jpg",
	twitterCard = "summary_large_image",
	keywords = [...metadataKeywords],
}: PageSEOProps): Metadata {

	const siteTitle = "Martin Mwangi | Full Stack & Mobile Developer";
	const fullTitle = `${title} | ${siteTitle}`;

	return {
		title: fullTitle,
		description,
		applicationName: siteTitle,
		keywords: keywords.join(", "),
		authors: [{ name: "Martin Mwangi", url: "https://thereactivedeveloper.com" }],
		creator: "Martin Mwangi",
		publisher: "Martin Mwangi",
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title: fullTitle,
			description,
			type: ogType,
			url: canonicalUrl,
			siteName: siteTitle,
			images: [{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: "Martin Mwangi - Full Stack & Mobile Developer"
			}],
			locale: 'en_US',
		},
		twitter: {
			card: twitterCard,
			title: fullTitle,
			description,
			images: [ogImage],
			creator: "@marville001",
		},
		icons: {
			icon: "/favicon.ico",
			apple: "/apple-touch-icon.png",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		verification: {
			google: 'your-google-verification-code',
		},
	};
}