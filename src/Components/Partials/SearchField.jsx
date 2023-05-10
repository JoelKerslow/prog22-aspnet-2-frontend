import React from 'react'

const SearchField = () => {
  return (
    <div className='search-field'>
        <label>
            <button className='fa-thin fa-magnifying-glass fa-xs'></button>
            <input type="text" placeholder="Search for products" />
        </label>
    </div>
  )
}

export default SearchField