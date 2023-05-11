import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from '../partials/ProductCard'
import Header from '../partials/Header'
import SearchField from '../partials/SearchField'
import ProductFilter from '../partials/ProductFilter'

const ProductSearchResults = () => {
  const { searchVal } = useParams()
  const { searchProducts, products, loading } = useContext(ProductContext)

  useEffect(() => {
    searchProducts(searchVal)
  }, [searchVal])

  const productList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))

  return (
    <>
      <Header headerContent={<SearchField />} />
      <ProductFilter />
      {loading ? (
        <div className='product-loading-message'>Loading products...</div>
      ) : (
        <>
          <div className="product-result-list">{productList}</div>
          {productList.length === 0 && <div className='no-products-message'>No products found</div>}
        </>
      )}
    </>
  )
}

export default ProductSearchResults
