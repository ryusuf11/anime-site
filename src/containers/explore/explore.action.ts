import type { getAnimeListParams } from "@/modules/anime/anime.types";
import { getAnimeList } from "../../modules/anime/anime.service";

export const actionGetExploreData = async (
	params: Partial<getAnimeListParams>,
) => {
	const animeList = await getAnimeList(params);

	return { animeList };
};
