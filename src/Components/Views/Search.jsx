import React from 'react'
import Header from '../partials/Header'
import SearchField from '../partials/SearchField'
import Departments from '../partials/Departments'
import Categories from '../../components/partials/Categories'

const Search = () => {
  return (
    <div>
      <Header headerContent={<SearchField />} />
      <Departments />
      <Categories />
    </div>
  )
}

export default Search
