import React from 'react'
import { addPostActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
let mapStateToProps = State => {
	return {
		postsData: State.profilePage.postsData,
		newPostText: State.profilePage.newPostText,
	}
}
let mapsDispatchToProps = dispatch => {
	return {
		addPost: newPostText => {
			dispatch(addPostActionCreator(newPostText))
		},
	}
}
const MyPostsConteiner = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)
export default MyPostsConteiner
