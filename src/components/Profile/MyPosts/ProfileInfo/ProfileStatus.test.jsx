import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'
describe('ProfileStatus component', () => {
	test('status from props should be in the state ', () => {
		const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
		const instance = component.getInstance()
		expect(instance.state.status).toBe('SUBSCRIBE TO BASIC')
	})
	test('after creation span should be displayed with correct status ', () => {
		const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
		const instance = component.root
		const span = instance.findByType('span')
		expect(span).not.toBeNull()
	})
	test('after creation span should be displayed with correct status ', () => {
		const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
		const instance = component.root
		expect(() => {
			const input = instance.findByType('input')
		}).toThrow()
	})
	test('after creation span should be displayed with correct status ', () => {
		const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
		const instance = component.root
		const span = instance.findByType('span')
		expect(span.children[0]).toBe('SUBSCRIBE TO BASIC')
	})
	test('input should be displayed in editMode ', () => {
		const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
		const instance = component.root
		const span = instance.findByType('span')
		span.props.onDoubleClick()
		const input = instance.findByType('input')
		expect(input.props.value).toBe('SUBSCRIBE TO BASIC')
	})
	test('callback should be called ', () => {
		const Callback = jest.fn()
		const component = create(
			<ProfileStatus status='SUBSCRIBE TO BASIC' updateStatus={Callback} />
		)
		const instance = component.getInstance()
		instance.deactivateEditMode()
		expect(Callback.mock.calls.length).toBe(1)
	})
})
