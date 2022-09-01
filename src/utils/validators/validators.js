export const requiredField = value => {
	if (value) {
		return undefined
	}
	return 'error'
}
export const maxLengthCreator = maxLength => value => {
	if (value && value.length > maxLength) {
		return `max ${maxLength} symbol`
	}
	return undefined
}
