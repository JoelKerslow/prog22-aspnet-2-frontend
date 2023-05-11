import React from 'react'
import { getDepartmentsAsync } from '../../services/CategoryServices'
import { useState, useEffect } from 'react'

const DepartmentBar = () => {
	const [departments, setDepartments] = useState([])
	const [activeDepartment, setActiveDepartment] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getDepartments = async () => {
			let departments = await getDepartmentsAsync()
			setDepartments(departments)
			setLoading(false)
		}
		getDepartments()
	}, [])

	const departmentList = departments.map((d) => {
		const isActive = activeDepartment === d.id
		const className = `department-item ${isActive ? 'active-department' : ''}`
		return (
			<div
				key={d.id}
				className={className}
				onClick={() => setActiveDepartment(d.id)}
			>
				{d.name}
			</div>
		)
	})

	return <div className="departments-section">{loading ? <p>Loading...</p> : departmentList}</div>
}

export default DepartmentBar
