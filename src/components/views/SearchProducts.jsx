import React from 'react'
import { useState } from 'react'
import Header from '../partials/Header'
import SearchField from '../partials/SearchField'
import Departments from '../partials/Departments'
import Categories from '../partials/Categories'
import Navbar from '../partials/Navbar'

const SearchProducts = () => {
  const [activeDepartment, setActiveDepartment] = useState(1)

  return (
    <div>
      <Header headerContent={<SearchField />} />
      <Departments activeDepartment={activeDepartment} setActiveDepartment={setActiveDepartment}/>
      <Categories activeDepartment={activeDepartment}/>
      <Navbar />
    </div>
  )
}

export default SearchProducts
