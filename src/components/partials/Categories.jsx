import React from 'react'
import { useState, useEffect } from 'react'
import { getCategoriesAsync } from '../../services/CategoryServices'
import { useNavigate } from 'react-router-dom'

const Categories = ({ activeDepartment }) => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getCategories = async () => {
      let categories = await getCategoriesAsync()
      setCategories(categories)
    }
    getCategories()
  }, [])

  const categoryList = categories.map((c) => {
    return (
      <div
        key={c.id}
        className="category-item"
        onClick={() => {
          navigate('/CategoryResults/' + activeDepartment + '/' + c.id)
        }}
      >
        <p className="category-item-text">{c.categoryName}</p>
      </div>
    )
  })

  return <div className="categories-section">{categoryList}</div>
}

export default Categories
