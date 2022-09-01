import React from 'react'
import style from './Users.module.css'
import userPhoto from './../../assets/imgs/user.jpg'
import { NavLink } from 'react-router-dom'
const User = ({ users, followingInProgress, unfollow, follow }) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile/' + users.id}>
						<img
							src={users.photos.small != null ? users.photos.small : userPhoto}
							className={style.userPhoto}
						/>
					</NavLink>
				</div>
				<div>
					{users.followed ? (
						<button
							disabled={followingInProgress.some(id => id === users.id)}
							onClick={() => {
								unfollow(users.id)
							}}
						>
							unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(id => id === users.id)}
							onClick={() => {
								follow(users.id)
							}}
						>
							follow
						</button>
					)}
				</div>
			</span>
			<span>
				<span>
					<div>{users.name}</div>
					<div>{users.status}</div>
				</span>
				<div>{'users.location.country'}</div>
				<div>{'users.location.city'}</div>
				<span></span>
			</span>
		</div>
	)
}
export default User
