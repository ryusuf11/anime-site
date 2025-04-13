import { Skeleton } from "@/components/atoms/Skeleton/skeleton";
import { Card, CardContent } from "@/components/molecules/Card/card";

export default function AnimeCardSkeleton() {
	return (
		<Card className="overflow-hidden">
			<div className="relative aspect-[2/3] w-full">
				<Skeleton className="absolute inset-0" />
			</div>
			<CardContent className="p-4 min-h-60">
				<Skeleton className="h-5 w-3/4 mb-2" />
				<Skeleton className="h-4 w-full mb-2" />
				<Skeleton className="h-4 w-5/6 mb-4" />
				<div className="flex justify-between">
					<Skeleton className="h-4 w-1/3" />
					<Skeleton className="h-4 w-1/4" />
				</div>
				<div className="flex gap-2 mt-4">
					<Skeleton className="h-5 w-14 rounded-md" />
					<Skeleton className="h-5 w-12 rounded-md" />
				</div>
			</CardContent>
		</Card>
	);
}

function AnimeCardSkeletonGrid() {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
			{Array.from({ length: 10 }).map((_, idx) => (
				<AnimeCardSkeleton key={`card-skeleton-${idx + 1}`} />
			))}
		</div>
	);
}

export { AnimeCardSkeleton, AnimeCardSkeletonGrid };
