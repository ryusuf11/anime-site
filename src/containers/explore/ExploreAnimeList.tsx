import AnimeCard from "@/components/organisms/anime-card";
import Pagination from "@/components/organisms/pagination";
import { actionGetExploreData } from "./explore.action";

export default async function ExploreAnimeList({
	keyword,
	page,
}: { keyword: string; page: number }) {
	const { animeList } = await actionGetExploreData({ q: keyword, page });
	return (
		<>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{animeList?.data.map((anime, idx) => (
					<AnimeCard
						key={`explore-anime-${anime.mal_id}-${idx + 1}`}
						anime={anime}
					/>
				))}
			</div>
			<Pagination
				currentPage={page}
				keyword={keyword}
				lastPage={animeList?.pagination.last_visible_page}
			/>
		</>
	);
}
