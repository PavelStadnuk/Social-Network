import React from 'react'
import {
	SendMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../Redux/message-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../HOC/AuthRedirect'
import { compose } from 'redux'
let mapStateToProps = State => {
	return {
		messagesPage: State.messagesPage,
	}
}
let mapsDispatchToProps = dispatch => {
	return {
		SendMessage: newMessageText => {
			dispatch(SendMessageActionCreator(newMessageText))
		},
	}
}
export default compose(
	connect(mapStateToProps, mapsDispatchToProps),
	withAuthRedirect
)(Dialogs)
