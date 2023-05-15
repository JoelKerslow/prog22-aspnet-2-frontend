import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import Header from '../partials/Header'
import ProductCard from '../partials/ProductCard'
import SearchField from '../partials/SearchField'

const CategoryResults = () => {
  const {departmentId, categoryId} = useParams()
  const { getProductsByCategoryAndDepartment, loading, products } = useContext(ProductContext)

  useEffect(() => {
    getProductsByCategoryAndDepartment(departmentId, categoryId)
  }, [])

  const productList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))

  return (
    <>
      <Header headerContent={<SearchField />} />
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

export default CategoryResults