export const GET = async <T>(
	url: string,
	next?: NextFetchRequestConfig,
): Promise<T | null> => {
	const headers = new Headers();
	headers.set("X-Forwarded-Host", "api.jikan.moe");

	let response: T | null = null;

	try {
		response = (await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			headers,
			next: {
				revalidate: 5 * 60, // 5 minutes
				...next,
			},
		}).then((res) => res.json())) as T;
	} catch (err) {
		console.log("Error fetching server", JSON.stringify(err));
	}

	return response;
};
