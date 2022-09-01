import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import { CreateField, Input } from '../common/FormsControls/FormsControls'
import { login, logout } from '../../Redux/auth-reducer'
import { Navigate } from 'react-router'
import style from '../common/FormsControls/FormControls.module.css'
const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{CreateField('Email', [requiredField], 'email', Input)}
			{CreateField('Password', [requiredField], 'password', Input, {
				type: 'password',
			})}
			{CreateField(
				null,
				[requiredField],
				'rememberMe',
				Input,
				{
					type: 'checkbox',
				},
				'remember me'
			)}
			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Navigate replace to='/profile' />
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
const mapStateToProps = State => ({
	isAuth: State.auth.isAuth,
})
export default connect(mapStateToProps, { login, logout })(Login)
