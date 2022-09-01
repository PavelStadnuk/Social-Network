import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	unfollow,
	toggleFollowingProgres,
	getUsersThunkCreator,
} from '../../Redux/Users-reducer'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFeatching,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from '../../Redux/users-selector'
class UserContainer extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}
	onPagechanged = pageNumber => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
	}
	render() {
		return (
			<>
				{this.props.isFeatching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPagechanged={this.onPagechanged}
					Users={this.props.Users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}
let mapStateToProps = State => {
	return {
		Users: getUsers(State),
		pageSize: getPageSize(State),
		totalUsersCount: getTotalUsersCount(State),
		currentPage: getCurrentPage(State),
		isFeatching: getIsFeatching(State),
		followingInProgress: getFollowingInProgress(State),
	}
}
export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgres,
		getUsersThunkCreator,
	})
)(UserContainer)
