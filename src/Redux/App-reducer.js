import { getAuthUserData } from './auth-reducer'
const SET_INITIALIZED = 'SET_INITIALIZED'
let initialState = {
	initialized: false,
}
const appreducer = (State = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...State,
				initialized: true,
			}
		default:
			return State
	}
}
export const initializedSuccess = () => ({
	type: SET_INITIALIZED,
})
export const initializeApp = () => {
	return dispatch => {
		let promise = dispatch(getAuthUserData())
		Promise.all([promise]).then(() => {
			dispatch(initializedSuccess())
		})
	}
}
export default appreducer
