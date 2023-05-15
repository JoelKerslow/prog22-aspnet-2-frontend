import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import ProductInfo from "../partials/ProdictInfo";
import Header from '../partials/Header'

const ProductDetails = () => {
  const { id } = useParams();

  const { getProductById, currentProduct } = useContext(ProductContext);

  useEffect(() => {
    if (Object.keys(currentProduct).length === 0) {
      getProductById(id);
    }
  }, [currentProduct, id, getProductById]);

  return (
    <>
    <Header />
    <div>{currentProduct && <ProductInfo product={currentProduct} />}</div>
    </>
  );
};

export default ProductDetails;