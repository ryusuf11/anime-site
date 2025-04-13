export interface Pagination {
	last_visible_page: number;
	has_next_page: boolean;
	items: Items;
}

export interface Items {
	count: number;
	total: number;
	per_page: number;
}

export interface PaginationResponse<T> {
	pagination: Pagination;
	data: T[];
}
