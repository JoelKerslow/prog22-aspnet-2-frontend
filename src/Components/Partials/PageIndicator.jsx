const PageIndicator = ({ currentPage }) => {
	return (
		<div className="page-indicators">
			{Array.from({ length: 3 }, (_, index) => (
				<div
					key={index}
					className={`indicator${index + 1 === currentPage ? ' active' : ''}`}
				></div>
			))}
		</div>
	)
}
export default PageIndicator
