import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SearchField = () => {
  const navigate = useNavigate()
  const searchVal = useRef()

  const handleSearch = () => {
    navigate(
      searchVal.current.value === ''
        ? '/SearchProducts'
        : `/Products/search/${searchVal.current.value}`
    )
    searchVal.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="search-field">
      <label>
        <button
          className="fa-thin fa-magnifying-glass fa-xs"
          onClick={handleSearch}
        ></button>
        <input type="text" placeholder="Search for products" ref={searchVal} onKeyDown={handleKeyDown}/>
      </label>
    </div>
  )
}

export default SearchField
