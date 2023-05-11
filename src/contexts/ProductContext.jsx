import React, { useState, createContext } from "react";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const productsBaseUrl =
    "https://aspnet2-grupp1-backend.azurewebsites.net/api/Products/";
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";
  
  //Dessa kan komma att ändras/uppdateras när mer funktionalitet finns på sidan.
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});


// #region Fetch methods
  const getProducts = () => {
    fetch(productsBaseUrl + "All", {
      headers: {
        "API-KEY": apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching products");
        }
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const getProductById = (productId) => {
    fetch(productsBaseUrl + "Id?productId=" + productId, {
      headers: {
        "API-KEY": apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching product");
        }
      })
      .then((data) => {
        console.log(data);
        setCurrentProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };

  const getProductsByTag = (tagId) => {
    fetch(productsBaseUrl + "tag?tagId=" + tagId, {
      headers: {
        "API-KEY": apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching products");
        }
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };


  const getProductsByCategory = (categoryId) => {
    fetch(productsBaseUrl + "category?categoryId=" + categoryId, {
      headers: {
        "API-KEY": apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching products");
        }
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
//#endregion

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        getProductById,
        getProductsByTag,
        getProductsByCategory,
        products,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
