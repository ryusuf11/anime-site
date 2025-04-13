import { GET } from "../shared/fetcher";
import type { PaginationResponse } from "../shared/shared.types";
import { serializeObject } from "../shared/utils";
import type {
	Anime,
	AnimeDetailResponse,
	AnimeRecommendations,
	AnimeReview,
	getAnimeListParams,
	getTopAnimeParams,
} from "./anime.types";

export const getAnimeList = async (
	queryParams: Partial<getAnimeListParams> = {},
) => {
	const queryString = new URLSearchParams(
		serializeObject(queryParams),
	).toString();

	return await GET<PaginationResponse<Anime> | undefined>(
		`/anime?${queryString}`,
	);
};

export const getTopAnime = async (
	queryParams: Partial<getTopAnimeParams> = {},
) => {
	const queryString = new URLSearchParams(
		serializeObject(queryParams),
	).toString();

	return await GET<PaginationResponse<Anime> | undefined>(
		`/top/anime?${queryString}`,
	);
};

export const getAnimeDetail = async (id: string) => {
	return await GET<AnimeDetailResponse | undefined>(`/anime/${id}/full`);
};

export const getAnimeRecommendation = async (id: string) => {
	return await GET<AnimeRecommendations | undefined>(
		`/anime/${id}/recommendations`,
	);
};

export const getAnimeReview = async (id: string) => {
	const queryString = new URLSearchParams(
		serializeObject({
			limit: 10,
		}),
	).toString();

	return await GET<PaginationResponse<AnimeReview> | undefined>(
		`/anime/${id}/reviews?${queryString}`,
	);
};
