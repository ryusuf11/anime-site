import {
	getAnimeDetail,
	getAnimeRecommendation,
	getAnimeReview,
} from "../../modules/anime/anime.service";

export const actionGetAnimeDetail = async (id: string) => {
	const animeDetail = await getAnimeDetail(id);

	return {
		animeDetail: animeDetail?.data,
	};
};

export const actionGetAnimeRecommendation = async (id: string) => {
	const animeRecommendation = await getAnimeRecommendation(id);

	return {
		animeRecommendation: animeRecommendation?.data || [],
	};
};

export const actionGetAnimeReview = async (id: string) => {
	const animeReview = await getAnimeReview(id);

	return {
		animeReview: animeReview?.data || [],
	};
};
