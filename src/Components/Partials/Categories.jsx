import React from 'react'
import { useState, useEffect } from 'react'
import { getCategoriesAsync } from '../../services/CategoryServices'

const Categories = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getCategories = async () => {
			let categories = await getCategoriesAsync()
			setCategories(categories)
		}
		getCategories()
	}, [])

	const categoryList = categories.map((c) => {
		return (
			<div key={c.id} className="category-item">
				<p className='category-item-text'>{c.categoryName}</p>
			</div>
		)
	})

	return <div className="categories-section">{categoryList}</div>
}

export default Categories
