import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const ProductFilter = () => {
  const sizeList = ['xs', 's', 'm', 'l', 'xl', 'xxl']
  const colorList = ['red', 'blue', 'beige', 'darkblue', 'black']
  const markList = ['Sale', 'New', 'Best Sellers']
  const tagList = [
    'Kids',
    'Dresses',
    'Pants',
    'T-shirts',
    'Unisex',
    'Accessories',
    'Shoes',
  ]

  const [priceRange, setPriceRange] = useState([25, 2000])

  const sizes = sizeList.map((s) => {
    return <div className="size-option">{s}</div>
  })

  const colors = colorList.map((c) => {
    return <div className={`color-option ${c}`}></div>
  })

  const marks = markList.map((m) => {
    return <div className="mark-option">{m}</div>
  })

  const tags = tagList.map((t) => {
    return <div className="tag-option">{t}</div>
  })

  return (
    <div className="filter-list">
      <h2 className="mb-3">Filter</h2>
      <h4 className="mb-3">Size</h4>
      <div className="size-filter mb-3">{sizes}</div>
      <div className="color-filter mb-3">
        <h4>Color</h4>
        {colors}
      </div>
      <h4 className="mb-3">Price</h4>
      <div className="price-filter mb-3">
        <Slider
          range
          min={25}
          max={2000}
          value={priceRange}
          onChange={setPriceRange}
        />
        <p>Price range: ${priceRange[0]} - ${priceRange[1]}</p>
      </div>
      <div className="mark-filter mb-3">{marks}</div>
      <h4 className="mb-3">Tags</h4>
      <div className="tag-filter mb-3">{tags}</div>
    </div>
  )
}

export default ProductFilter
