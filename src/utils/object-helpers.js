export const updateObjectInArray = (
	items,
	itemID,
	objectPropName,
	newObjectProps
) => {
	return items.map(users => {
		if (users[objectPropName] === itemID) {
			return { ...users, ...newObjectProps }
		}
		return users
	})
}
