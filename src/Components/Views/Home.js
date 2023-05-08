import React from 'react'
import Header from '../Partials/Header'
import SearchField from '../Partials/SearchField'

const Home = () => {
  return (
    <div>
      <Header headerContent={<SearchField/>}/>
    </div>
  )
}

export default Home
