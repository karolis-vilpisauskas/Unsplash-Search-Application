import {
	FETCH_IMAGES,
	SEARCH_IMAGES,
	LOAD_MORE_IMAGES
} from "../actions/types";

const initialState = {
	page: 2,
	items: [],
	item: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				...state,
				items: action.payload,
				page: 2
			};
		case SEARCH_IMAGES:
			return {
				...state,
				items: action.payload,
				page: 2
			};
		case LOAD_MORE_IMAGES:
			return {
				...state,
				items: [...state.items, ...action.payload],
				page: state.page + 1
			};
		default:
			return state;
	}
};
