import { METADATAS } from "@/constants/metadata";
import Link from "next/link";
import React from 'react';

export const metadata = METADATAS.viewer;

const page = ({ searchParams }: { searchParams: { document: string; }; }) => {

	const viewable_docs = [
		{
			key: 'cv',
			doc_url: 'https://www.thereactivedeveloper.com/cv.pdf',
			title: 'Martin Mwangi CV',
			downloadable: true
		}
	];

	const doc = viewable_docs.find((doc) => doc.key === searchParams?.document);

	if (!doc || !searchParams?.document) {
		return (
			<div className="py-5">
				<div className="max-w-5xl p-4 bg-white rounded-md w-full mx-auto">
					<h1 className="text-black">Document not found</h1>
				</div>
			</div>
		);
	}


	return (
		<div className="py-5 px-4">
			<div className="max-w-5xl p-4 bg-white rounded-md w-full mx-auto">
				<div className="flex items-center justify-between">
					<h4 className="text-black">{doc.title}</h4>
					{
						doc.downloadable &&

						<Link href={doc.doc_url} download={doc.title} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded px-6 py-2 hover:bg-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download</Link>
					}
				</div>

				<hr className="my-6" />

				<div className="my-4 ">
					<iframe
						src={`https://docs.google.com/gview?url=${doc.doc_url}&embedded=true`}
						className="w-full h-full min-h-[100vh] rounded-lg bg-white"
					></iframe>
				</div>

			</div>
		</div>
	);
};

export default page;