"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../atoms/Button/Button";

interface PaginationProps {
	currentPage: number;
	keyword: string;
	lastPage?: number;
}

export default function Pagination({
	currentPage,
	keyword,
	lastPage = 1138,
}: PaginationProps) {
	const router = useRouter();
	const params = useSearchParams();

	const handlePageChange = (page: number) => {
		const query = new URLSearchParams(params.toString());
		query.set("page", page.toString());
		if (keyword) query.set("q", keyword);
		router.push(`/explore?${query.toString()}`);
	};

	const renderPageButton = (page: number) => (
		<Button
			key={`pagination-page-${page}`}
			variant={page === currentPage ? "default" : "outline"}
			onClick={() => handlePageChange(page)}
			className={cn(
				"px-3",
				page === currentPage && "font-bold",
				"hover:text-primary",
			)}
		>
			{page}
		</Button>
	);

	const renderEllipsis = (key: string) => (
		<span
			key={`pagination-elipsis-${key}`}
			className="px-2 text-muted-foreground"
		>
			...
		</span>
	);

	const pageButtons = [];

	if (currentPage > 1) {
		pageButtons.push(renderPageButton(1));
	}

	if (currentPage > 3) {
		pageButtons.push(renderEllipsis("start-ellipsis"));
	}

	for (let i = currentPage - 1; i <= currentPage + 1; i++) {
		if (i > 1 && i < lastPage) {
			pageButtons.push(renderPageButton(i));
		}
	}

	if (currentPage < lastPage - 2) {
		pageButtons.push(renderEllipsis("end-ellipsis"));
	}

	if (currentPage < lastPage) {
		pageButtons.push(renderPageButton(lastPage));
	}

	return (
		<div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
			<Button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage <= 1}
				variant="outline"
				className="hover:text-primary"
			>
				Prev
			</Button>

			{pageButtons}

			<Button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage >= lastPage}
				variant="outline"
				className="hover:text-primary"
			>
				Next
			</Button>
		</div>
	);
}
