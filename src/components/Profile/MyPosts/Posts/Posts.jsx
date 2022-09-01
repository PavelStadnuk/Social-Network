import React from 'react'
import c from './Posts.module.css'
const Posts = props => {
	return (
		<div className={c.item}>
			<img src='https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'></img>
			{props.message}
			<div>
				<span>like {props.count}</span>
			</div>
		</div>
	)
}
export default Posts
