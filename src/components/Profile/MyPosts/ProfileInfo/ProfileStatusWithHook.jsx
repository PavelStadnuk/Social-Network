import React, { useEffect, useState } from 'react'
import c from './ProfileInfo.module.css'
const ProfileStatusWithHook = props => {
	let [editMode, setEditmode] = useState(false)
	const activateEditMode = () => {
		setEditmode(true)
	}
	let [status, setStatus] = useState(props.status)
	const deactivateEditMode = () => {
		setEditmode(false)
		props.updateStatus(status)
	}
	useEffect(() => {
		setStatus(props.status)
	}, [props.status])
	const onStatusChange = event => {
		setStatus(event.currentTarget.value)
	}
	/* componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	} */
	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					></input>
				</div>
			)}
		</div>
	)
}
export default ProfileStatusWithHook
