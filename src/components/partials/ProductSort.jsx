import React from 'react'

const ProductSort = ( isFiltered, filteredList, setFilteredList, products, setProducts, ) => {
  const sortings = [
    'Newest',
    'Oldest',
    'A-Z',
    'Highest Price',
    'Lowest Price',
    'Rating',
  ]

  const handleSorting = (sorting) => {
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

  return <div></div>
}

export default ProductSort
