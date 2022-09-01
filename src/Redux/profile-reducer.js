import { ProfileAPI, usersAPI } from '../API/API'
const Delete_Post = 'Delete_Post'
const addPost = 'addPost'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_Status = 'SET_Status'
let initialState = {
	postsData: [
		{ id: 1, message: 'i love react', liKesCount: 11 },
		{ id: 2, message: 'js is my second language', liKesCount: 12 },
	],
	profile: null,
	status: ' ',
}
const profilereducer = (State = initialState, action) => {
	switch (action.type) {
		case addPost:
			let newPost = {
				id: 5,
				message: action.newPostText,
				liKesCount: 0,
			}
			return {
				...State,
				postsData: [...State.postsData, newPost],
				newPostText: '',
			}
		case SET_USER_PROFILE: {
			return { ...State, profile: action.profile }
		}
		case SET_Status: {
			return { ...State, status: action.status }
		}
		case Delete_Post: {
			return {
				...State,
				postsData: State.postsData.filter(p => p.id != action.postid),
			}
		}
		default:
			return State
	}
}
export const addPostActionCreator = newPostText => ({
	type: addPost,
	newPostText,
})
export const deletePost = postid => ({
	type: Delete_Post,
	postid,
})
export const setUsersProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})
export const setStatus = status => ({
	type: SET_Status,
	status,
})
export const getUsersProfile = userid => async dispatch => {
	let response = await usersAPI.getProfile(userid)
	dispatch(setUsersProfile(response.data))
}
export const getStatus = userid => async dispatch => {
	let response = await ProfileAPI.getStatus(userid)
	dispatch(setStatus(response.data))
}
export const updateStatus = status => async dispatch => {
	let response = await ProfileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export default profilereducer
