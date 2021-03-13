export const reducer = (state, action) => {
	if (action.type === 'GET_DATA') {
		const newPeople = [...state.people, action.payload];
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'item added',
		};
	}
	
	
	throw new Error('no matching action type');
};
