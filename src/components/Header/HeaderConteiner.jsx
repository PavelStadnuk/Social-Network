import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from './../../Redux/auth-reducer'
class HeaderCoteiner extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}
const mapStateToProps = State => ({
	isAuth: State.auth.isAuth,
	login: State.auth.login,
})
export default connect(mapStateToProps, { logout })(HeaderCoteiner)
