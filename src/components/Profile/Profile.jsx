import React from 'react'
import c from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import MyPostsConteiner from './MyPosts/MyPostsConteiner'

const Profile = props => {
	return (
		<div>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<MyPostsConteiner />
		</div>
	)
}
export default Profile
