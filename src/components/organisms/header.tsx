"use client";

import { Film, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { Button } from "@/components/atoms/Button/Button";
import { ModeToggle } from "@/components/molecules/ModeToggle/mode-toggle";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/molecules/sheet";
import dynamic from "next/dynamic";

const SearchInput = dynamic(() =>
	import("../molecules/search-input").then((mod) => mod.SearchInput),
);

export default function Header() {
	const params = useSearchParams();
	const pathname = usePathname();
	const defaultSearch = useMemo(
		() => (pathname === "/explore" ? params.get("q") : ""),
		[pathname, params],
	);

	const routes = [
		{ href: "/", label: "Home" },
		{ href: "/explore", label: "Explore" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95">
			<div className="container flex h-16 items-center px-4">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<Link href="/" className="flex items-center gap-2 mb-8">
							<Film className="h-6 w-6" />
							<span className="font-bold">AnimeMagic</span>
						</Link>
						<nav className="flex flex-col gap-4">
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									className={`text-sm font-medium transition-colors hover:text-primary ${
										pathname === route.href
											? "text-foreground"
											: "text-muted-foreground"
									}`}
								>
									{route.label}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>

				<Link href="/" className="flex items-center gap-2 mr-6">
					<Film className="h-6 w-6" />
					<span className="hidden font-bold sm:inline-block">AnimeMagic</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6 text-sm">
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={`font-medium transition-colors hover:text-primary ${
								pathname === route.href
									? "text-foreground"
									: "text-muted-foreground"
							}`}
						>
							{route.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center ml-auto gap-2">
					<div className="flex items-center">
						<SearchInput defaultSearch={defaultSearch || ""} />
					</div>

					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
