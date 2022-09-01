import messagereducer from './message-reducer'
import profilereducer from './profile-reducer'
import sidebarreducer from './sidebar-reducer'
let Store = {
	_State: {
		profilePage: {
			postsData: [
				{ id: 1, message: 'i love react', liKesCount: 11 },
				{ id: 2, message: 'js is my second language', liKesCount: 12 },
			],
			newPostText: 'big dik',
		},
		messagesPage: {
			dialogsData: [
				{ id: 1, name: 'Pablo' },
				{ id: 2, name: 'Paver' },
				{ id: 3, name: 'Seta' },
			],
			messageData: [
				{ id: 1, message: 'hi' },
				{ id: 2, message: 'hi1' },
				{ id: 3, message: 'hi2' },
			],
			newMessageText: '',
		},
		sidebar: {},
	},
	getState() {
		return this._State
	},
	_callsubscriber() {},
	subscribe(observer) {
		this._callsubscriber = observer
	},
	dispatch(action) {
		this._State.profilePage = profilereducer(this._State.profilePage, action)
		this._State.messagesPage = messagereducer(this._State.messagesPage, action)
		this._State.sidebar = sidebarreducer(this._State.sidebar, action)
		this._callsubscriber(this._State)
	},
}
export default Store
window.Store = Store
