import React from 'react'
import ProductTagPreview from '../partials/ProductTagPreview'
import Showcase from '../partials/Showcase'
import OfferBanner from '../partials/OfferBanner'
import Header from '../partials/Header'

const Home = () => {
	return (
		<>
			<Header headerContent={"Marketo"}/>
			<Showcase />
			<ProductTagPreview tag="Featured Products" tagId="1" />
			<OfferBanner offer="Take 50% off now!" />
			<ProductTagPreview tag="Best Sellers" tagId="2" />
		</>
	)
}

export default Home
