// src/app/keystatic/layout.tsx
import KeystaticApp from "./keystatic";
import type { Metadata } from 'next';

const title = "Keystatic CMS - Martin Mwangi (Marville001)";

const description = "Keystatic CMS - Martin Mwangi (Marville001) - Software Developer: React, Next.js, Tailwind CSS";

export const metadata: Metadata = {
	metadataBase: new URL('https://thereactivedeveloper.com'),
	title,
	description,
	alternates: {
		canonical: `/keystatic`
	},
};

export default function Layout() {
	return (
		<div>
			<KeystaticApp />
		</div>
	);
}