import { usersAPI } from '../API/API'
import { updateObjectInArray } from '../utils/object-helpers'

const UNFFOLOW = 'unfollow'
const FOLLOW = 'follow'
const SET_USERS = 'setUsers'
const Set_CURENTPAGE = 'setCurrentPage'
const SET_TOTAL_USERS_COUNT = 'setTotalUsersCount'
const TOGLE_IS_FEATCHING = 'togleISFeatching'
const TOGLE_IS_FOLLOWING_PROGRESS = 'followingInProgress'
let initialState = {
	Users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFeatching: false,
	followingInProgress: [],
}
const Usersreducer = (State = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...State,
				Users: updateObjectInArray(State.Users, action.userid, 'id', {
					followed: true,
				}),
			}
		case UNFFOLOW:
			return {
				...State,
				Users: updateObjectInArray(State.Users, action.userid, 'id', {
					followed: false,
				}),
			}
		case SET_USERS: {
			return { ...State, Users: [...action.Users] }
		}
		case Set_CURENTPAGE: {
			return { ...State, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...State, totalUsersCount: action.totalUsersCount }
		}
		case TOGLE_IS_FEATCHING: {
			return { ...State, isFeatching: action.isFeatching }
		}
		case TOGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...State,
				followingInProgress: action.isFeatching
					? [...State.followingInProgress, action.userid]
					: State.followingInProgress.filter(id => id !== action.userid),
			}
		}
		default:
			return State
	}
}
export const followSuccess = userid => ({
	type: FOLLOW,
	userid,
})
export const unfollowSuccess = userid => ({
	type: UNFFOLOW,
	userid,
})
export const setUsers = Users => ({ type: SET_USERS, Users })
export const setCurrentPage = currentPage => ({
	type: Set_CURENTPAGE,
	currentPage,
})
export const setTotalUsersCount = totalUsersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})
export const setIsFeatching = isFeatching => ({
	type: TOGLE_IS_FEATCHING,
	isFeatching,
})
export const toggleFollowingProgres = (isFeatching, userid) => ({
	type: TOGLE_IS_FOLLOWING_PROGRESS,
	isFeatching,
	userid,
})
export const getUsersThunkCreator =
	(currentPage, pageSize) => async dispatch => {
		dispatch(setIsFeatching(true))
		dispatch(setCurrentPage(currentPage))
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(setIsFeatching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	}

const followUnfollowFlow = async (
	dispatch,
	usersid,
	apiMethod,
	actionCreator
) => {
	dispatch(toggleFollowingProgres(true, usersid))
	let response = await apiMethod(usersid)
	if (response.data.resultCode == 0) {
		dispatch(actionCreator(usersid))
	}
	dispatch(toggleFollowingProgres(false, usersid))
}

export const follow = usersid => async dispatch => {
	let apiMethod = usersAPI.follow.bind(usersAPI)
	let actionCreator = followSuccess
	followUnfollowFlow(dispatch, usersid, apiMethod, actionCreator)
}
export const unfollow = usersid => async dispatch => {
	let apiMethod = usersAPI.unfollow.bind(usersAPI)
	let actionCreator = unfollowSuccess
	followUnfollowFlow(dispatch, usersid, apiMethod, actionCreator)
}
export default Usersreducer
