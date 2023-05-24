import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from '../partials/ProductCard'
import Header from '../partials/Header'
import SearchField from '../partials/SearchField'
import ProductFilter from '../partials/ProductFilter'

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

  const [sorting, setSorting] = useState('Rating')

  const toggleFilter = () => {
    setShowFilter(!showFilter)
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

  //       'Newest',
  //       'Oldest',
  //       'A-Z',
  //       'Highest Price',
  //       'Lowest Price',
  //       'Rating'

  const handleSorting = () => {
    let sortedProducts = []
    if (!isFiltered) {
      sortedProducts = [...products].sort((a, b) => {
        if (sorting === 'Newest') {
          const date1 = new Date(a.createdAt)
          const date2 = new Date(b.createdAt)
          return date1 - date2
        } else if (sorting === 'Oldest') {
          const date1 = new Date(a.createdAt)
          const date2 = new Date(b.createdAt)
          return date2 - date1
        } else if (sorting === 'A-Z') {
          const name1 = a.name.toLowerCase()
          const name2 = b.name.toLowerCase()
          if (name1 < name2) {
            return -1
          }
          if (name1 > name2) {
            return 1
          }
          return 0
        } else if (sorting === 'Highest Price') {
          return b.price - a.price
        } else if (sorting === 'Lowest Price') {
          return a.price - b.price
        } else if (sorting === 'Rating') {
          return b.reviewAverage - a.reviewAverage
        }
      })
      setProducts(sortedProducts)
    } else {
      sortedProducts = [...filteredList].sort((a, b) => {
        if (sorting === 'Newest') {
          const date1 = new Date(a.createdAt)
          const date2 = new Date(b.createdAt)
          return date1 - date2
        } else if (sorting === 'Oldest') {
          const date1 = new Date(a.createdAt)
          const date2 = new Date(b.createdAt)
          return date2 - date1
        } else if (sorting === 'A-Z') {
          const name1 = a.name.toLowerCase()
          const name2 = b.name.toLowerCase()
          if (name1 < name2) {
            return -1
          }
          if (name1 > name2) {
            return 1
          }
          return 0
        } else if (sorting === 'Highest Price') {
          return b.price - a.price
        } else if (sorting === 'Lowest Price') {
          return a.price - b.price
        } else if (sorting === 'Rating') {
          return b.reviewAverage - a.reviewAverage
        }
      })
      setFilteredList(sortedProducts)
    }
    console.log(sortedProducts)
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
        <div className="under-header" onClick={toggleFilter}>
          <i className="fa-light fa-sliders-up" />
          <p>Filters</p>
        </div>
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
      <button
        className="BigBlackButton"
        onClick={() => {
          handleSorting()
        }}
      >
        Sort
      </button>
    </>
  )
}

export default Products
