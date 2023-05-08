import React from 'react'
import _Header from '../Partials/_Header'
import SearchField from '../Partials/_SearchField'

const Home = () => {
  return (
    <div>
      {/* <_Header headerContent={<h1>MANERO</h1>}></_Header> */}
      <_Header headerContent={<SearchField/>}/>
    </div>
  )
}

export default Home
