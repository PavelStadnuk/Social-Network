import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './user'
const Users = props => {
	return (
		<div>
			<Paginator
				currentPage={props.currentPage}
				totalItemsCount={props.totalUsersCount}
				onPagechanged={props.onPagechanged}
				pageSize={props.pageSize}
				portionSize={10}
			/>
			{props.Users.map(users => (
				<User
					key={users.id}
					users={users}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
				/>
			))}
		</div>
	)
}
export default Users
