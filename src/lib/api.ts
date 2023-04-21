import { DateTime } from 'luxon';
import type { Role, MemberCounts, MemberCountsAPI } from './types';

export const qs = (queryObject?: URLSearchParams): string =>
	new URLSearchParams(queryObject).toString();

const apiUrl = (endpoint: string, qs?: string) =>
	`${import.meta.env.PUBLIC_API_URL}/${endpoint}${qs ? `?${qs}` : ''}`.replaceAll('//', '/');

interface FetchJSONOptions {
	query?: any;
	body?: any;
	method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

const fetchAPI = <T>(endpoint: string, { query, body, method }: FetchJSONOptions = {}) =>
	fetch(apiUrl(endpoint, query ? qs(query) : undefined), {
		method: method ?? 'GET',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).then(async (res) => {
		if (res.status.toString().startsWith('2')) {
			return res.json() as T;
		}

		throw new Error(await res.text());
	});

export async function getMembercount(): Promise<MemberCounts> {
	const { PlayStation, Xbox, lastUpdated } = await fetchAPI<MemberCountsAPI>('member/count');

	return {
		PlayStation: Number(PlayStation),
		Xbox: Number(Xbox),
		lastUpdated: DateTime.fromJSDate(new Date(lastUpdated)),
	};
}

export const getStaffProfiles = () =>
	fetchAPI<Role[]>('profile/by-role', {
		query: {
			roleIds: ['546342033867014165', '549644467498516508', '568141992794783749'],
		},
	}).then((roles: Role[]) => roles.sort((a, b) => b.position - a.position));
