import * as axios from 'axios'
const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'fffd7f8b-8337-4b78-96c1-40a55e742d9d',
	},
})
export const usersAPI = {
	getUsers: (currentPage = 1, pageSize = 10) => {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(usersid) {
		return instance.post(`follow/${usersid}`)
	},
	unfollow(usersid) {
		return instance.delete(`follow/${usersid}`)
	},
	getProfile(userId) {
		return ProfileAPI.getProfile(userId)
	},
}
export const ProfileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId)
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
	},
}
export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe })
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}
