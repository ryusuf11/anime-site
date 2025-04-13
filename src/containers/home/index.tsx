import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import AnimeCard from "@/components/organisms/anime-card";
import { actionGetHomeData } from "@/containers/home/home.action";
import dynamic from "next/dynamic";

const AnimeSlider = dynamic(
	() => import("../../components/organisms/anime-slider"),
);

export const HomeContainer = async () => {
	const { topAnime, animeList } = await actionGetHomeData();

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full">
					<AnimeSlider animeList={topAnime?.data || []} />
				</section>

				<section className="container px-4 py-12 mx-auto">
					<div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
						<h2 className="text-3xl font-bold tracking-tight">Popular Anime</h2>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
						{animeList?.data.map((anime) => (
							<AnimeCard
								key={`home-anime-list-${anime.mal_id}`}
								anime={anime}
							/>
						))}
					</div>

					<div className="flex justify-center mt-12">
						<Link href="/explore">
							<Button variant="secondary" size="lg" className="cursor-pointer">
								Show More
							</Button>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
};
