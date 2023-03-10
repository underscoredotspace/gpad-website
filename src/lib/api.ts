export const apiFetch = async <T extends any>(endpoint: string): Promise<T> => {
	const url = `${import.meta.env.PUBLIC_API_URL}/${endpoint}`.replaceAll('//', '/');

	return await fetch(url).then((res) => res.json());
};
