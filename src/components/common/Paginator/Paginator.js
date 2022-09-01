import React, { useState } from 'react'
import cn from 'classnames'
import style from './Paginator.module.css'
const Paginator = props => {
	let portionSize = props.portionSize
	let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionNumber = portionNumber * portionSize
	return (
		<div className={style.paginator}>
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}
				>
					Prev
				</button>
			)}

			{pages
				.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
				.map(p => {
					return (
						<span
							className={cn(
								{ [style.selectedPage]: props.currentPage === p },
								style.PageNumber
							)}
							key={p}
							onClick={e => {
								props.onPagechanged(p)
							}}
						>
							{p}
						</span>
					)
				})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}
				>
					Next
				</button>
			)}
		</div>
	)
}
export default Paginator
