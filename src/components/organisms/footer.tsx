import { Film } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t bg-muted/40">
			<div className="container px-4 py-8 mx-auto">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="space-y-3">
						<Link href="/" className="flex items-center gap-2">
							<Film className="h-6 w-6" />
							<span className="font-bold">AnimeMagic</span>
						</Link>
						<p className="text-sm text-muted-foreground">
							Discover and explore the world of cinema with AnimeMagic - your
							ultimate anime companion.
						</p>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-medium">Explore</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/explore"
									className="text-muted-foreground hover:text-foreground"
								>
									Explore
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=Action"
									className="text-muted-foreground hover:text-foreground"
								>
									Action
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=Comedy"
									className="text-muted-foreground hover:text-foreground"
								>
									Comedy
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=Drama"
									className="text-muted-foreground hover:text-foreground"
								>
									Drama
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-medium">Resources</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-medium">Contact</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Email Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Twitter
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground"
								>
									Facebook
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-4 border-t pt-8 mt-8 md:flex-row">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} AnimeMagic. All rights reserved.
					</p>
					<div className="flex gap-4">
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
