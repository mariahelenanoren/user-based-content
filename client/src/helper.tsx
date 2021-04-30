export const makeRequest = async (url: string, method: string, body?: {}) => {
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const status = await response.json();

	if (!response.ok) {
		throw status;
	} else {
		return status;
	}
};
