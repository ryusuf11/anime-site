import { getAnimeList, getTopAnime } from "../../modules/anime/anime.service";

export const actionGetHomeData = async () => {
	const [animeList, topAnime] = await Promise.all([
		getAnimeList(),
		getTopAnime({
			limit: 10,
		}),
	]);

	return { animeList, topAnime };
};
