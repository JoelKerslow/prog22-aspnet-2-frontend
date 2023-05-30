import React from 'react'
import ProductTagPreview from '../partials/ProductTagPreview'
import Showcase from '../partials/Showcase'
import OfferBanner from '../partials/OfferBanner'
import Header from '../partials/Header'
import Navbar from '../partials/Navbar'
import SearchField from '../partials/SearchField'

const Home = () => {
	return (
		<>
			<Header headerContent={<h1>MANERO</h1>} showCartButton={true}/>
			<Showcase />
			<ProductTagPreview tag="Featured Products" tagId="1" />
			<OfferBanner offer="Take 50% off now!" />
			<ProductTagPreview tag="Best Sellers" tagId="2" />
			<Navbar />
		</>
	)
}

export default Home
