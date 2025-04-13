import { AnimeCardSkeletonGrid } from "@/components/organisms/anime-card-skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ExploreAnimeList = dynamic(() => import("./ExploreAnimeList"));

export default function ExploreContainer({
	keyword,
	page,
}: {
	keyword: string;
	page: number;
}) {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="container px-4 py-12 mx-auto">
					<div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
						<h2 className="text-3xl font-bold tracking-tight">Explore Anime</h2>
					</div>
					<Suspense fallback={<AnimeCardSkeletonGrid />}>
						<ExploreAnimeList keyword={keyword} page={page} />
					</Suspense>
				</section>
			</main>
		</div>
	);
}
