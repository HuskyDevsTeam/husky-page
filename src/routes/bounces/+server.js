const MESSAGE = 'su suscripcion ha cesado';

const BODY_LOG_LIMIT = 10_000;

/**
 * @param {Request} request
 */
async function readBodyForLog(request) {
	// GET/HEAD normalmente no tienen body; evitamos consumirlo.
	if (request.method === 'GET' || request.method === 'HEAD') return null;

	const contentType = request.headers.get('content-type') || '';

	try {
		if (contentType.includes('application/json')) {
			const json = await request.json();
			return { type: 'json', value: json };
		}

		const text = await request.text();
		if (!text) return { type: 'text', value: '' };

		if (contentType.includes('application/x-www-form-urlencoded')) {
			const params = new URLSearchParams(text);
			return { type: 'form', value: Object.fromEntries(params.entries()) };
		}

		return { type: 'text', value: text.length > BODY_LOG_LIMIT ? `${text.slice(0, BODY_LOG_LIMIT)}…[truncated]` : text };
	} catch (error) {
		return { type: 'error', value: error instanceof Error ? error.message : String(error) };
	}
}

/**
 * @param {import('@sveltejs/kit').RequestEvent} event
 */
async function logBounce(event) {
	const { request, url } = event;
	const body = await readBodyForLog(request);

	// Log simple y legible para Dockploy (stdout)
	console.log(
		JSON.stringify({
			type: 'bounces',
			ts: new Date().toISOString(),
			method: request.method,
			path: url.pathname,
			query: Object.fromEntries(url.searchParams.entries()),
			contentType: request.headers.get('content-type') || null,
			userAgent: request.headers.get('user-agent') || null,
			body
		})
	);
}

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	await logBounce(event);
	return new Response(MESSAGE, {
		status: 200,
		headers: {
			'content-type': 'text/plain; charset=utf-8'
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	await logBounce(event);
	return new Response(MESSAGE, {
		status: 200,
		headers: {
			'content-type': 'text/plain; charset=utf-8'
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function HEAD(event) {
	await logBounce(event);
	return new Response(null, {
		status: 200
	});
}
