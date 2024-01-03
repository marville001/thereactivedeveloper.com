
import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";

const NotFound = () => {
	return (
		<main className="isolate_">
			<Header />
			<div className="mt-32">
				<section className="max-container !min-h-[60vh] flex justify-center items-center flex-col wrapper">
					<h1 className="text-[120px] md:text-[150px] font-bold">404</h1>
					<p className="max-w-[500px] text-[20px] text-center">We couldn&apos;t locate that page, sorry about that! Please check the URL and try again, or you can head back to our
					</p>
					<div className="flex gap-4 mt-8">
						<Link href="/" className="text-white ml-2 hover:bg-accent/70 transition capitalize bg-accent py-1.5 px-8 rounded-md">Home</Link>
						<Link href="/contact" className="hover:bg-accent transition hover:text-white ml-2 capitalize border py-1.5 px-8 rounded-md text-accent border-accent">Contact Me</Link>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
};

export default NotFound;