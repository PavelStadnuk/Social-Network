const SendMessage = 'SendMessage'
let initialState = {
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
}
const messagereducer = (State = initialState, action) => {
	switch (action.type) {
		case SendMessage:
			let body = action.newMessageText
			return {
				...State,
				messageData: [...State.messageData, { id: 3, message: body }],
			}
		default:
			return State
	}
}
export const SendMessageActionCreator = newMessageText => ({
	type: SendMessage,
	newMessageText,
})
export default messagereducer
