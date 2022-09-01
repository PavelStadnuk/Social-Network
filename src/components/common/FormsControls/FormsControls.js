import React from 'react'
import style from './FormControls.module.css'
import { Field } from 'redux-form'
export const Textarea = ({ input, meta, ...props }) => {
	const showError = meta.touched && meta.error
	return (
		<div className={style.formcontrol + ' ' + (showError ? style.error : '')}>
			<div>
				<textarea {...input} {...props} />
			</div>
			<div>{showError && <span>{meta.error}</span>}</div>
		</div>
	)
}
export const Input = ({ input, meta, ...props }) => {
	const showError = meta.touched && meta.error
	return (
		<div className={style.formcontrol + ' ' + (showError ? style.error : '')}>
			<div>
				<input {...input} {...props} />
			</div>
			<div>{showError && <span>{meta.error}</span>}</div>
		</div>
	)
}
export const CreateField = (
	placeholder,
	validate,
	name,
	component,
	props = {},
	text = ''
) => {
	return (
		<div>
			<Field
				placeholder={placeholder}
				validate={validate}
				name={name}
				component={component}
				{...props}
			/>
			{text}
		</div>
	)
}
