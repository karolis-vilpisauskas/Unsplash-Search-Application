import { SAVE_QUERY, SET_QUERY, DELETE_QUERY } from "../actions/types";

const initialState = {
	items: [],
	item: ""
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SAVE_QUERY:
			return {
				...state,
				items: [...state.items, state.item]
			};
		case SET_QUERY:
			return {
				...state,
				item: action.payload
			};
		case DELETE_QUERY:
			const itemDeleted = [...state.items];
			itemDeleted.splice(action.payload, 1);
			return {
				...state,
				items: itemDeleted
			};
		default:
			return state;
	}
}
