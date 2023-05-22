import Cookies from "js-cookie"

const productReviewsUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/api/ProductReviews"
const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0"

const formatCommentOrNull = (comment) => comment ? comment.replace(/\s+/g, " ").trim() : null

const ProductReviewsAsync = async (productId) => {
	const url = `${productReviewsUrl}?productId=${productId}`

	const result = await fetch(url, {
		headers: {
			"API-KEY": apiKey,
		},
	});

	const data = await result.json();
	return data;
};

const createProductReviewAsync = async (reviewData) => {
	const requestData = {
		...reviewData,
		comment: formatCommentOrNull(reviewData.comment),
	}

	const result = await fetch(productReviewsUrl, {
		method: "POST",
		headers: {
			"API-KEY": apiKey,
			"Content-Type": "application/json",
			"Authorization": "Bearer " + Cookies.get("maneroToken"),
		},
		body: JSON.stringify(requestData),
	})
		.then((res) => {
			if (res.ok) {
				return true
			}

			return false
		})
		.catch((err) => {
			console.error(err.message)
			return false
		})

	return result
}

export { ProductReviewsAsync, createProductReviewAsync };
