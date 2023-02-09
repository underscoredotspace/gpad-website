export async function get() {
	return new Response(JSON.stringify({ ps: 1023, xb: 540, lastUpdate: 1675950669951 }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
