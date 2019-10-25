import {
	FETCH_IMAGES,
	SEARCH_IMAGES,
	LOAD_MORE_IMAGES
} from "../actions/types";

const initialState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				...state,
				items: action.payload
			};
		case SEARCH_IMAGES:
			return {
				...state,
				items: action.payload
			};
		case LOAD_MORE_IMAGES:
			return {
				...state,
				items: [...state.items, ...action.payload]
			};
		default:
			return state;
	}
}
