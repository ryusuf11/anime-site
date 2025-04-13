import { Skeleton } from "@/components/atoms/Skeleton/skeleton";

export default function RecommendationSectionSkeleton() {
	return (
		<section className="container px-4 py-8 mx-auto">
			<h2 className="text-2xl font-bold mb-6">Recommended Anime</h2>
			<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{Array.from({ length: 10 }).map((_, i) => (
					<div
						key={`recommendation-skeleton-${i + 1}`}
						className="group relative rounded overflow-hidden shadow"
					>
						<div className="relative aspect-[2/3] w-full">
							<Skeleton className="absolute inset-0 w-full h-full" />
						</div>
						<Skeleton className="mt-2 h-4 w-3/4 mx-auto rounded" />
					</div>
				))}
			</div>
		</section>
	);
}
