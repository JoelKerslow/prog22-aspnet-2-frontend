const getDepartmentsAsync = async () => {
	const res = await fetch(
		'https://aspnet2-grupp1-backend.azurewebsites.net/api/Departments',
		{
			headers: {
				'Api-Key': 'f77ca749-67f4-4c22-9039-137272442ea0',
			},
		}
	)
	const data = await res.json()
	return data
}

const getCategoriesAsync = async () => {
	const res = await fetch(
		'https://aspnet2-grupp1-backend.azurewebsites.net/api/Categories',
		{
			headers: {
				'Api-Key': 'f77ca749-67f4-4c22-9039-137272442ea0',
			},
		}
	)
	const data = await res.json()
	return data
}

export { getDepartmentsAsync, getCategoriesAsync }
