import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
	maxLengthCreator,
	requiredField,
} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import c from './MyPosts.module.css'
import Posts from './Posts/Posts'
const MyPosts = props => {
	let postsElement = props.postsData.map(posts => (
		<Posts message={posts.message} count={posts.liKesCount} />
	))
	let addPost = values => {
		props.addPost(values.newPostText)
	}
	return (
		<div className={c.postsBlock}>
			<h3>My post</h3>
			<AddNewPostFormRedux onSubmit={addPost} />
			<div className={c.posts}>{postsElement}</div>
		</div>
	)
}
const AddNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name='newPostText'
					component={Textarea}
					validate={[requiredField, maxLengthCreator(10)]}
					placeholder='post message'
				/>
			</div>
			<div>
				<button>add post</button>
			</div>
		</form>
	)
}
const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(
	AddNewPostForm
)
export default MyPosts
