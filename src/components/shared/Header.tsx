import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed z-30 w-full max-w-screen-md bg-[#012018]_ text-white shadow backdrop-blur-lg inset-x-0 top-0 mx-auto py-2 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
			<div className="px-4">
				<div className="flex items-center justify-between">
					<div className="flex shrink-0">
						<Link className="flex items-center" href="/">
							<Image height={80} width={80} className=" rounded-full" src="/assets/logo.png" alt="" />
							<p className="sr-only">SiteGPT</p>
						</Link>
					</div>
					<div className="hidden md:flex md:items-center md:justify-center md:gap-5">
						<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-[#012018]/20 hover:text-gray-100" href="/portfolio">Portfolio</Link>
						<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-[#012018]/20 hover:text-gray-100" href="/about-me" aria-current="page">About</Link>
						<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-[#012018]/20 hover:text-gray-100" href="/blog" aria-current="page">Blog</Link>
						<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-[#012018]/20 hover:text-gray-100" href="/contact" aria-current="page">Contact</Link>
					</div>
					<div className="flex items-center justify-end gap-3">
						<Link href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application" target="_blank" className="inline-flex items-center justify-center bg-accent text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded px-6 py-2 hover:bg-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Hire Me</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;