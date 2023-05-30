import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from '../partials/ProductCard'
import Header from '../partials/Header'
import SearchField from '../partials/SearchField'
import ProductFilter from '../partials/ProductFilter'
import ProductSort from '../partials/ProductSort'
import Navbar from '../partials/Navbar'

const Products = () => {
  const { type, value } = useParams()
  const {
    searchProducts,
    products,
    setProducts,
    loading,
    getProductsByCategoryAndDepartment,
    getProductsByTag,
  } = useContext(ProductContext)
  const [filteredList, setFilteredList] = useState([])

  const [priceRange, setPriceRange] = useState([25, 2000])
  const [activeSize, setActiveSize] = useState()
  const [activeColor, setActiveColor] = useState()
  const [activeMark, setActiveMark] = useState()
  const [activeTags, setActiveTags] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [showSorting, setShowSorting] = useState(false)
  const [activeSorting, setActiveSorting] = useState('');

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const toggleSorting = () => {
    setShowSorting(!showSorting)
  }

  useEffect(() => {
    setIsFiltered(false)
    if (type.toLowerCase() === 'search') {
      searchProducts(value)
    }
    if (type.toLowerCase() === 'category') {
      const valArr = value.split('-', 2)
      const departmentId = valArr[0]
      const categoryId = valArr[1]
      getProductsByCategoryAndDepartment(departmentId, categoryId)
    }
    if (type.toLowerCase() === 'tag') {
      getProductsByTag(value)
    }
  }, [type, value])

  const handleFilter = () => {
    const filtered = products.filter(filterProducts)
    setFilteredList(filtered)
    setIsFiltered(true)
    setShowFilter(false)
  }

  const filterProducts = (product) => {
    if (activeSize && product.size !== activeSize) {
      return false
    }
    if (activeColor && product.color !== activeColor) {
      return false
    }
    if (activeMark && product.tag !== activeMark) {
      return false
    }
    if (activeTags.length > 0) {
      let matched = false
      activeTags.forEach((tag) => {
        if (product.department === tag || product.category === tag) {
          matched = true
        }
      })
      if (!matched) {
        return false
      }
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    return true
  }

  const productList = !isFiltered
    ? products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    : filteredList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))

  return (
    <>
      <Header headerContent={<SearchField />} />
      {!showFilter && (
        <>
          <div className="under-header">
            <div onClick={toggleFilter}>
              <i className="fa-light fa-sliders-up" />
              <p>Filters</p>
            </div>
            <div onClick={toggleSorting}>
              <p>Sorting by</p>
              <i
                className={
                  !showSorting
                    ? 'fa-light fa-chevron-down'
                    : 'fa-light fa-chevron-up'
                }
              ></i>
            </div>
          </div>
          {showSorting && (
            <ProductSort
              filteredList={filteredList}
              products={products}
              isFiltered={isFiltered}
              setFilteredList={setFilteredList}
              setProducts={setProducts}
              setShowSorting={setShowSorting}
              activeSorting={activeSorting}
              setActiveSorting={setActiveSorting}
            />
          )}
        </>
      )}
      {showFilter && (
        <ProductFilter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          activeMark={activeMark}
          setActiveMark={setActiveMark}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          toggleFilter={toggleFilter}
          handleFilter={handleFilter}
        />
      )}
      {loading ? (
        <div className="product-loading-message">Loading products...</div>
      ) : (
        <>
          <div className="product-result-list">{productList}</div>
          {productList.length === 0 && (
            <div className="no-products-message">No products found</div>
          )}
        </>
      )}
      <Navbar />
    </>
  )
}

export default Products
