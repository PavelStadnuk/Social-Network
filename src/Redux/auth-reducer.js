import { stopSubmit } from 'redux-form'
import { authAPI } from './../API/API'
const SET_USER_DATA = 'reactlearning/auth/SET_USER_DATA'
let initialState = {
	userId: null,
	email: null,
	login: null,
	isFeatching: false,
	isAuth: false,
}
const authreducer = (State = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...State,
				...action.data,
			}
		default:
			return State
	}
}
export const setAuthUserData = (userid, email, login, isAuth) => ({
	type: SET_USER_DATA,
	data: { userid, email, login, isAuth },
})
export const getAuthUserData = () => async dispatch => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { login, id, email } = response.data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}
export const login = (email, password, rememberMe) => async dispatch => {
	let response = await authAPI.login(email, password, rememberMe)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		let message =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'Some error'
		dispatch(stopSubmit('login', { _error: message }))
	}
}
export const logout = () => async dispatch => {
	let response = authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}
export default authreducer
