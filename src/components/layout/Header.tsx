import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed z-30 w-full max-w-screen-md bg-white text-white shadow backdrop-blur-lg inset-x-0 top-0 mx-auto border py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
			<div className="px-4">
				<div className="flex items-center justify-between">
					<div className="flex shrink-0">
						<Link className="flex items-center" href="/">
							<Image height={20} width={100} className="h-7 w-auto" src="https://sitegpt.ai/images/logo-full.svg" alt="" />
							<p className="sr-only">SiteGPT</p>
						</Link>
					</div>
					<div className="hidden md:flex md:items-center md:justify-center md:gap-5">
						<Link className="inline-block text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-gray-100 hover:text-gray-900" href="/#how-it-works">How it works</Link>
						<Link className="inline-block text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-gray-100 hover:text-gray-900" href="/pricing" aria-current="page">Pricing</Link>
						<Link className="inline-block text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-gray-100 hover:text-gray-900" href="/demo">Demo</Link>
					</div>
					<div className="flex items-center justify-end gap-3">
						<Link href="/login" className="hidden items-center justify-center bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 rounded-xl px-3 py-2 hover:bg-gray-50 sm:inline-flex">Sign in</Link>
						<Link href="/pricing" className="inline-flex items-center justify-center bg-blue-600 text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-3 py-2 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Create Your Chatbot Now</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;