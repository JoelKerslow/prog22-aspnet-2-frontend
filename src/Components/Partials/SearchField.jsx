import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SearchField = () => {
  const navigate = useNavigate()
  const searchVal = useRef()

  return (
    <div className="search-field">
      <label>
        <button
          className="fa-thin fa-magnifying-glass fa-xs"
          onClick={() => {
            navigate(
              searchVal.current.value === ''
                ? '/SearchProducts'
                : `/ProductResults/${searchVal.current.value}`
            )
            searchVal.current.value = ''
          }}
        ></button>
        <input type="text" placeholder="Search for products" ref={searchVal} />
      </label>
    </div>
  )
}

export default SearchField
