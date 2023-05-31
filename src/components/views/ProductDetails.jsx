import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import ProductInfo from "../partials/ProductInfo";
import Header from "../partials/Header";
import { ProductReviewsAsync } from "../../services/ReviewServices";
import Navbar from '../partials/Navbar'

const ProductDetails = () => {
  const { productId } = useParams();
  const { getProductById, currentProduct, productReviews, setProductReviews } =
    useContext(ProductContext);

  const setReviews = async () => {
    setProductReviews(await ProductReviewsAsync(productId));
  };
  
  useEffect(() => {
    if (Object.keys(currentProduct).length === 0) {
      getProductById(productId);
    }
    setReviews()
    
  }, [currentProduct]);

  return (
    <>
      <Header headerContent={<h1>MANERO</h1>} showCartButton={true} useGoBackButton={true}/>
      <div>
        {currentProduct && (
          <ProductInfo
            product={currentProduct}
            productReviews={productReviews}
          />
        )}
      </div>
      <Navbar />
    </>
  );
};

export default ProductDetails;
