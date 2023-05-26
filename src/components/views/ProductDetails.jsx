import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import ProductInfo from "../partials/ProductInfo";
import Header from "../partials/Header";

const ProductDetails = () => {
  const { productId } = useParams();

  const { getProductById, currentProduct, productReviews } = useContext(ProductContext);


  useEffect(() => {
    if (Object.keys(currentProduct).length === 0) {
      getProductById(productId);
    }
  }, [currentProduct, getProductById]);

  return (
    <>
      <Header />
      <div>
        {currentProduct && (
          <ProductInfo product={currentProduct} productReviews={productReviews}/>
        )}
      </div>
    </>
  );
};

export default ProductDetails;