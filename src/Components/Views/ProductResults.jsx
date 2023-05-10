import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Contexts/ProductContext'
import ProductCard from '../Partials/ProductCard'
import Header from '../Partials/Header'
import SearchField from '../Partials/SearchField'

const ProductResults = () => {
  const { searchVal } = useParams()
  const { searchProducts, products } = useContext(ProductContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      await searchProducts(searchVal)
      setLoading(false)
    }
    loadProducts()
  }, [searchProducts])

  const productList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))

  return (
    <>
      <Header headerContent={<SearchField />} />
      {loading ? (
        <div>Loading products...</div>
      ) : (
        <>
          <div className="product-result-list">{productList}</div>
          {productList.length === 0 && <h1>No products found</h1>}
        </>
      )}
    </>
  )
}

export default ProductResults
