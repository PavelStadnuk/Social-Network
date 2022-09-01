export const getUsers = State => {
	return State.UsersPage.Users
}
export const getPageSize = State => {
	return State.UsersPage.pageSize
}
export const getTotalUsersCount = State => {
	return State.UsersPage.totalUsersCount
}
export const getCurrentPage = State => {
	return State.UsersPage.currentPage
}
export const getIsFeatching = State => {
	return State.UsersPage.isFeatching
}
export const getFollowingInProgress = State => {
	return State.UsersPage.followingInProgress
}
