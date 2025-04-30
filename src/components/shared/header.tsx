import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<section className="bg-black fixed z-30 w-full inset-x-0 top-0 bg-opacity-70">
			<header className="max-w-screen-md bg-[#012018]_ text-white mx-auto py-2 lg:max-w-screen-lg">
				<div className="px-4">
					<div className="flex items-center justify-between">
						<div className="flex shrink-0">
							<Link className="flex items-center" href="/">
								<Image height={60} width={60} priority className="  rounded-full" src="/assets/logo.png" alt="Martin Mwangi" />
								<p className="sr-only">Martin Mwangi - trdevr.com</p>
							</Link>
						</div>
						<nav>
							<ul className="hidden md:flex md:items-center md:justify-center md:gap-5">
								<li>
									<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-black hover:text-gray-100" href="/portfolio">Portfolio</Link>
								</li>
								<li>
									<a
										target="_blank"
										className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-black hover:text-gray-100"
										href="https://blog.thereactivedeveloper.com/"
										aria-current="page"
										rel="noopener noreferrer"

									>Blog</a>
								</li>
								<li>
									<Link className="inline-block text-sm font-medium text-gray-100 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-black hover:text-gray-100" href="/contact" aria-current="page">Contact</Link>
								</li>
							</ul>
						</nav>
						<div className="flex items-center justify-end gap-3">
							<Link href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application" target="_blank" className="inline-flex items-center justify-center bg-accent text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded px-6 py-2 hover:bg-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Hire Me</Link>
						</div>
					</div>
				</div>
			</header >
		</section>
	);
};

export default Header;