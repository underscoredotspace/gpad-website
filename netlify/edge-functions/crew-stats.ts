export default async () => {
	const crewStats = await fetch('https://gpadcrew.com/api/member/count')
		.then((res) => res.json())
		.catch((error) => ({ error }));

	return new Response(JSON.stringify(crewStats), {
		status: crewStats.error ? 500 : 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
