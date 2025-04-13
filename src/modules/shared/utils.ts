export const serializeObject = (obj: object) => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [key, String(value)]),
	);
};
