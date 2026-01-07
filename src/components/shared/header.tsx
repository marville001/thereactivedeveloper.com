"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: "/about-me", label: "About Me" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "https://blog.mmwangi.com/", label: "Blog", external: true },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className="fixed z-50 w-full inset-x-0 top-0">
			<div className="glass border-b border-white/5">
				<nav className="max-w-screen-lg mx-auto px-4 py-3">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link className="flex items-center gap-3 group" href="/">
							<div className="relative">
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
								<Image
									height={48}
									width={48}
									priority
									className="relative rounded-full border-2 border-white/10"
									src="/assets/logo.png"
									alt="Martin Mwangi"
								/>
							</div>
							<div>
								<p className="font-semibold text-sm">Martin Mwangi</p>
								<p className="text-xs text-muted-foreground">Full Stack Developer</p>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<ul className="hidden md:flex items-center gap-1">
							{navLinks.map((link) => (
								<li key={link.href}>
									{link.external ? (
										<a
											target="_blank"
											className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
											href={link.href}
											rel="noopener noreferrer"
										>
											{link.label}
										</a>
									) : (
										<Link
											className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
											href={link.href}
										>
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>

						{/* CTA Button & Mobile Menu Toggle */}
						<div className="flex items-center gap-3">
							<Link
								href="/contact"
								className="hidden sm:inline-flex btn-gradient !px-5 !py-2 text-sm"
							>
								<span className="relative z-10">Hire Me</span>
							</Link>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
								aria-label="Toggle menu"
							>
								{isMenuOpen ? (
									<X className="w-5 h-5" />
								) : (
									<Menu className="w-5 h-5" />
								)}
							</button>
						</div>
					</div>
				</nav>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden glass border-b border-white/5">
					<nav className="max-w-screen-lg mx-auto px-4 py-4">
						<ul className="flex flex-col gap-1">
							{navLinks.map((link) => (
								<li key={link.href}>
									{link.external ? (
										<a
											target="_blank"
											className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
											href={link.href}
											rel="noopener noreferrer"
											onClick={() => setIsMenuOpen(false)}
										>
											{link.label}
										</a>
									) : (
										<Link
											className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
											href={link.href}
											onClick={() => setIsMenuOpen(false)}
										>
											{link.label}
										</Link>
									)}
								</li>
							))}
							<li className="mt-2 pt-2 border-t border-white/10">
								<Link
									href="/contact"
									className="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									Hire Me
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;