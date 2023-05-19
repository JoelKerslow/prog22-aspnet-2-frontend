import { React, useState, useEffect } from "react";
import UserProductReview from "../partials/UserProductReview";
import ProductReviewSiteHead from "../partials/ProductReviewSiteHead";
import { ProductReviewsAsync } from "../../services/ReviewServices";
import { useParams } from "react-router-dom";

const ProductReview = () => {
	const [reviewList, setReviewList] = useState([]);
	const { productId } = useParams();

	useEffect(() => {
		const GetReviewsAsync = async () => {
			ProductReviewsAsync(productId).then((data) => setReviewList(data));
		};
		GetReviewsAsync();
	}, [productId]);

	useEffect(() => {
		console.log(reviewList);
	}, [reviewList]);

	return (
		<div>
			<ProductReviewSiteHead />
			{reviewList.map((review) => {
				return <UserProductReview key={review.id} review={review} />;
			})}
		</div>
	);
};

export default ProductReview;
