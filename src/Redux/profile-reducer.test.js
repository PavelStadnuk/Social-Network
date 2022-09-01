import profilereducer, {
	addPostActionCreator,
	deletePost,
} from './profile-reducer'
let State = {
	postsData: [
		{ id: 1, message: 'i love react', liKesCount: 11 },
		{ id: 2, message: 'js is my second language', liKesCount: 12 },
	],
}

test('length of post should be incremented', () => {
	let action = addPostActionCreator('pavel work')
	let newState = profilereducer(State, action)
	expect(newState.postsData.length).toBe(3)
})
test('message of post should be correct', () => {
	let action = addPostActionCreator('pavel work')
	let newState = profilereducer(State, action)
	expect(newState.postsData[2].message).toBe('pavel work')
})
test('length of post should be decremented', () => {
	let action = deletePost('pavel work')
	let newState = profilereducer(State, action)
	expect(newState.postsData.length).toBe(2)
})
