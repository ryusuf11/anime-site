export interface Anime {
	mal_id: number;
	url: string;
	images: {
		jpg: Image;
		webp: Image;
	};
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: Broadcast;
	producers: Demographic[];
	licensors: Demographic[];
	studios: Demographic[];
	genres: Demographic[];
	explicit_genres: Demographic[];
	themes: Demographic[];
	demographics: Demographic[];
}

export interface Aired {
	from: string;
	to: string;
	prop: Prop;
}

export interface Prop {
	from: From;
	to: From;
	string: string;
}

export interface From {
	day: number;
	month: number;
	year: number;
}

export interface Broadcast {
	day: string;
	time: string;
	timezone: string;
	string: string;
}

export interface Demographic {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Image {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface TrailerImage extends Image {
	medium_image_url: string;
	maximum_image_url: string;
}

export interface Title {
	type: string;
	title: string;
}

export interface Trailer {
	youtube_id: string;
	url: string;
	embed_url: string;
	images: TrailerImage;
}

export interface getTopAnimeParams {
	type:
		| "tv"
		| "movie"
		| "ova"
		| "special"
		| "ona"
		| "music"
		| "cm"
		| "pv"
		| "tv_special";
	filter: "airing" | "upcoming" | "bypopularity" | "favorite";
	rating: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
	sfw: boolean;
	page: number;
	limit: number;
}

export interface getAnimeListParams {
	unapproved: boolean;
	page: number;
	limit: number;
	q: string;
	type:
		| "tv"
		| "movie"
		| "ova"
		| "special"
		| "ona"
		| "music"
		| "cm"
		| "pv"
		| "tv_special";
	score: number;
	min_score: number;
	max_score: number;
	status: "airing" | "complete" | "upcoming";
	rating: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
	sfw: boolean;
	genres: string;
	genres_exclude: string;
	order_by:
		| "mal_id"
		| "title"
		| "start_date"
		| "episodes"
		| "score"
		| "scored_by"
		| "rank"
		| "popularity"
		| "members"
		| "favorites";
	sort: "desc" | "asc";
	letter: string;
	producers: string;
	start_date: string;
	end_date: string;
}

export interface AnimeDetailResponse {
	data: AnimeDetail;
}

export interface AnimeDetail {
	mal_id: number;
	url: string;
	images: { [key: string]: Image };
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: Broadcast;
	producers: Demographic[];
	licensors: Demographic[];
	studios: Demographic[];
	genres: Demographic[];
	explicit_genres: Demographic[];
	themes: Demographic[];
	demographics: Demographic[];
	relations: Relation[];
	theme: Theme;
	external: External[];
	streaming: External[];
}

export interface External {
	name: string;
	url: string;
}

export interface Relation {
	relation: string;
	entry: Demographic[];
}

export interface Theme {
	openings: string[];
	endings: string[];
}

export interface AnimeRecommendations {
	data: Recommendation[];
}

export interface Recommendation {
	entry: Entry;
}

export interface Entry {
	mal_id: number;
	url: string;
	images: { [key: string]: Image };
	title: string;
}

export interface AnimeReview {
	user: User;
	mal_id: number;
	url: string;
	type: string;
	reactions: Reactions;
	date: string;
	review: string;
	score: number;
	tags: string[];
	is_spoiler: boolean;
	is_preliminary: boolean;
	episodes_watched: number;
}

export interface Reactions {
	overall: number;
	nice: number;
	love_it: number;
	funny: number;
	confusing: number;
	informative: number;
	well_written: number;
	creative: number;
}

export interface User {
	username: string;
	url: string;
	images: {
		[key: string]: {
			image_url: string;
		};
	};
}
