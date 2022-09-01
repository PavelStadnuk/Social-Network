import React from 'react'
import c from './Dialogs.module.css'
import Dialogitem from './Dialogitem/Dialogitem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import {
	maxLengthCreator,
	requiredField,
} from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
const Dialogs = props => {
	let State = props.messagesPage
	let dialogsElements = State.dialogsData.map(dialog => (
		<Dialogitem name={dialog.name} key={dialog.id} id={dialog.id} />
	))
	let messagesElement = State.messageData.map(message => (
		<Message message={message.message} key={message.id} />
	))
	let addNewMessage = values => {
		props.SendMessage(values)
	}
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsitem}>{dialogsElements}</div>
			<div className={c.messages}>
				<div>{messagesElement}</div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	)
}
const AddMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					validate={[requiredField, maxLengthCreator(10)]}
					name='newMessageText'
					placeholder='Enter your message'
				></Field>
			</div>
			<div>
				<button>send</button>
			</div>
		</form>
	)
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
	AddMessageForm
)
export default Dialogs
