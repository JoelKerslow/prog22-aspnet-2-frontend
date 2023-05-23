const ShowcaseAsync = async () => {
	const url =
		"https://aspnet2-grupp1-backend.azurewebsites.net/api/Showcase/All";
	const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";

	const result = await fetch(url, {
		headers: {
			"API-KEY": apiKey,
		},
	});

	const data = await result.json();
	return data;
};

export { ShowcaseAsync };
