import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import BackArrow from '../partials/generalPartials/BackArrow'

const ProductFilter = ({
  priceRange,
  setPriceRange,
  activeSize,
  setActiveSize,
  activeColor,
  setActiveColor,
  activeMark,
  setActiveMark,
  activeTags,
  setActiveTags,
  toggleFilter,
  handleFilter
}) => {
  const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const colorList = ['Red', 'Blue', 'Beige', 'Darkblue', 'Black']
  const markList = ['Featured Products', 'New', 'Best Sellers']
  const tagList = [
    'Kids',
    'Dresses',
    'Pants',
    'T-shirts',
    'Unisex',
    'Accessories',
    'Shoes',
  ]

  const sizes = sizeList.map((s) => {
    const isSelected = s === activeSize
    return (
      <div
        className={`size-option${isSelected ? ' selected-size' : ''}`}
        onClick={() => {
          setActiveSize(isSelected ? null : s)
        }}
      >
        {s}
      </div>
    )
  })

  const colors = colorList.map((c) => {
    const isSelected = c === activeColor
    return (
      <div
        className={`color-option${isSelected ? ' selected-color' : ''}`}
        style={{ backgroundColor: c }}
        onClick={() => {
          setActiveColor(isSelected ? null : c)
        }}
      ></div>
    )
  })

  const markColors = ['green', 'orange', 'purple']

  const marks = markList.map((m, index) => {
    const isSelected = m === activeMark
    return (
      <div
        className="mark-option"
        onClick={() => {
          setActiveMark(isSelected ? null : m)
        }}
      >
        <div className={`mark-checkbox`}>{isSelected && '✔️'}</div>
        <span style={{ backgroundColor: markColors[index] }}>{m}</span>
      </div>
    )
  })

  const tags = tagList.map((t) => {
    const isSelected = activeTags.includes(t)
    return (
      <div
        className={`tag-option ${isSelected && 'selected-tag'}`}
        onClick={() => {
          if (isSelected) {
            setActiveTags(activeTags.filter((tag) => tag !== t))
          } else {
            setActiveTags([...activeTags, t])
          }
        }}
      >
        {t}
      </div>
    )
  })

  return (
    <>
      <div className="filter-list">
        <BackArrow clickEvent={toggleFilter} />
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
          <p>
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
        <div className="mark-filter mb-3">{marks}</div>
        <h4 className="mb-3">Tags</h4>
        <div className="tag-filter mb-3">{tags}</div>
        <button className="BigBlackButton" onClick={() => {
          handleFilter()
        }}>APPLY FILTERS</button>
      </div>
    </>
  )
}

export default ProductFilter
