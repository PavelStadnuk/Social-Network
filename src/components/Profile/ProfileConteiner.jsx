import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
	getUsersProfile,
	getStatus,
	updateStatus,
} from '../../Redux/profile-reducer'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { withAuthRedirect } from '../HOC/AuthRedirect'
import { compose } from 'redux'
class ProfileConteiner extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		if (!userId) {
			userId = this.props.AuthorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUsersProfile(userId)
		this.props.getStatus(userId)
	}
	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
}
let mapStateToProps = State => ({
	profile: State.profilePage.profile,
	status: State.profilePage.status,
	AuthorizedUserId: State.auth.userid,
	isAuth: State.auth.isAuth,
})
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation()
		let navigate = useNavigate()
		let params = useParams()
		return <Component {...props} router={{ location, navigate, params }} />
	}

	return ComponentWithRouterProp
}
export default compose(
	connect(mapStateToProps, {
		getUsersProfile,
		getStatus,
		updateStatus,
	}),
	withRouter,
	withAuthRedirect
)(ProfileConteiner)
