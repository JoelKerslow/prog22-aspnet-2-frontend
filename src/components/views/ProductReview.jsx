import { React, useState, useEffect } from 'react'
import UserProductReview from '../partials/UserProductReview'
import ProductReviewSiteHead from '../partials/ProductReviewSiteHead'
import { ProductReviewsAsync } from "../../services/ReviewServices";
import { useParams } from 'react-router'

const ProductReview = () => {
  const [reviewList, setReviewList] = useState([]);
  const { productId } = useParams();

  useEffect(()=>{
    const GetReviewsAsync = async () => {
      ProductReviewsAsync(1).then((data) => setReviewList(data));
      console.log({reviewList})
    };
    GetReviewsAsync();
  }, []);

  return (
    <div>
        <ProductReviewSiteHead />
        <UserProductReview />
        <UserProductReview />
        <UserProductReview />
        <UserProductReview />
        <UserProductReview />
    </div>
  )
}



export default ProductReview
