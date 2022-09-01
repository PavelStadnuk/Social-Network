import React from 'react'
import Preloader from '../../../common/preloader/preloader'
import c from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHook from './ProfileStatusWithHook'
const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img src='https://images.unsplash.com/photo-1629662182419-960a8596bba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80'></img>
			</div>
			<div className={c.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava+description
				<ProfileStatusWithHook
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</div>
	)
}
export default ProfileInfo
