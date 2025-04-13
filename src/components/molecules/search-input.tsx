"use client";

import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchInput({ defaultSearch }: { defaultSearch?: string }) {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 500);
	const router = useRouter();

	useEffect(() => {
		if (debouncedQuery.trim() !== "") {
			router.push(`/explore?q=${encodeURIComponent(debouncedQuery.trim())}`);
		}
	}, [debouncedQuery, router]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && query.trim() !== "") {
			router.push(`/explore?q=${encodeURIComponent(query.trim())}`);
		}
	};

	const handleClear = () => {
		setQuery("");
		router.push("/explore");
	};

	return (
		<div className="relative flex items-center w-[200px] md:w-[300px]">
			<Input
				type="search"
				placeholder="Search anime..."
				className="pr-10 h-9"
				defaultValue={defaultSearch}
				onChange={(e) => setQuery(e.currentTarget.value)}
				onKeyDown={handleKeyDown}
			/>
			{(defaultSearch || query) && (
				<button
					type="button"
					onClick={handleClear}
					className="absolute right-12 text-muted-foreground hover:text-foreground transition"
				>
					<X className="h-4 w-4" />
				</button>
			)}
			<Button variant="default" size="icon" className="ml-1">
				<Search className="h-5 w-5" />
			</Button>
		</div>
	);
}
