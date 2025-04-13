import { Skeleton } from "@/components/atoms/Skeleton/skeleton";
import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/molecules/Card/card";

export default function ReviewSectionSkeleton() {
	return (
		<section className="container px-4 py-8 mx-auto">
			<div className="mb-6">
				<Skeleton className="h-6 w-40" />
			</div>

			<div className="space-y-4">
				{Array.from({ length: 3 }).map((_, i) => (
					<Card
						key={`review-skeleton-${i + 1}`}
						className="border rounded-xl shadow-sm"
					>
						<CardHeader className="flex flex-row items-center space-x-4">
							<Skeleton className="w-10 h-10 rounded-full" />
							<div className="flex-1 space-y-2">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-3 w-24" />
							</div>
						</CardHeader>

						<CardContent className="space-y-3">
							<div className="flex items-center gap-2">
								<Skeleton className="h-4 w-6 rounded" />
								<Skeleton className="h-4 w-20 rounded" />
								<Skeleton className="h-4 w-16 rounded" />
							</div>

							<div className="space-y-2">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-11/12" />
								<Skeleton className="h-4 w-9/12" />
							</div>

							<Skeleton className="h-4 w-24" />
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
