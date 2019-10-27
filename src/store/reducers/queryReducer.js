import { SAVE_QUERY, SET_QUERY, DELETE_QUERY, TOGGLE_QUERIES } from "../actions/types";

const storage = JSON.parse(sessionStorage.getItem("queries")) || [];

const initialState = {
	items: storage,
	item: "",
	active: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SAVE_QUERY:
			const computedItems = [...state.items, state.item];
			sessionStorage.setItem("queries", JSON.stringify(computedItems));
			return {
				...state,
				items: computedItems
			};
		case SET_QUERY:
			return {
				...state,
				item: action.payload
			};
		case DELETE_QUERY:
			const splicedItems = [...state.items];
			splicedItems.splice(action.payload, 1);
			sessionStorage.setItem("queries", JSON.stringify(splicedItems));
			return {
				...state,
				items: splicedItems
			};
		case TOGGLE_QUERIES:
			return {
				...state,
				active: !state.active
			}
		default:
			return state;
	}
};
