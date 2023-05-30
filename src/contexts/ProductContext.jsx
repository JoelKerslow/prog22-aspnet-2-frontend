import React, { useState, createContext } from 'react'

export const ProductContext = createContext()
const placeholderImage = "https://tarasitaliancucina.com/wp-content/uploads/2020/07/placeholderssquare-768x768.png";

const ProductContextProvider = ({ children }) => {
  const productsBaseUrl =
    'https://aspnet2-grupp1-backend.azurewebsites.net/api/Products/'
  const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0'

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [productReviews, setProductReviews] = useState([])


  // #region Fetch methods
  const getProducts = () => {
    fetch(productsBaseUrl + 'All', {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching products')
        }
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }

  const getProductById = (productId) => {
    fetch(productsBaseUrl + 'Id?productId=' + productId, {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching product')
        }
      })
      .then((data) => {
        setCurrentProduct(data)
        setProductReviews(data.reviews)
      })
      .catch((error) => {
        console.error('Error fetching product:', error)
      })
  }

  const getProductsByTag = (tagId) => {
    setLoading(true)
    fetch(productsBaseUrl + 'tag?tagId=' + tagId, {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching products')
        }
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }

  const searchProducts = (searchVal) => {
    setLoading(true)
    fetch(productsBaseUrl + 'search?searchValue=' + searchVal, {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching products')
        }
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }

  const getProductsByCategory = (categoryId) => {
    setLoading(true)
    fetch(productsBaseUrl + 'category?categoryId=' + categoryId, {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching products')
        }
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }

  const getProductsByCategoryAndDepartment = (departmentId, categoryId) => {
    setLoading(true)
    fetch(productsBaseUrl + `Category/Department?categoryId=${categoryId}&departmentId=${departmentId}`, {
      headers: {
        'API-KEY': apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching products')
        }
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }
  //#endregion

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        getProductById,
        getProductsByTag,
        getProductsByCategory,
        products,
        setProducts,
        currentProduct,
        setCurrentProduct,
        searchProducts,
        loading, 
        getProductsByCategoryAndDepartment,
        setProductReviews,
        productReviews
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
export {placeholderImage};
export default ProductContextProvider
