import React from 'react'
import Header from '../Partials/Header'
import SearchField from '../Partials/SearchField'
import Departments from '../Partials/Departments'
import Categories from '../Partials/Categories'

const Home = () => {
	return (
		<div>
			<Header headerContent={<SearchField />} />
			<Departments />
			<Categories />
		</div>
	)
}

export default Home
