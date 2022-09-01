import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const Header = props => {
	return (
		<header className={s.header}>
			<img src='https://www.meme-arsenal.com/memes/5241226e6cfadfb9ab8b41ac9159b337.jpg' />
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div>
						{props.login} - <button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink to='/login'>login</NavLink>
				)}
			</div>
		</header>
	)
}
export default Header
