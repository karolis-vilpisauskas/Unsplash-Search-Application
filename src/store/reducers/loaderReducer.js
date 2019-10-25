import { START_LOADER, STOP_LOADER } from "../actions/types";

const initialState = {
	active: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_LOADER:
			return {
				...state,
				active: true
			};
		case STOP_LOADER:
			return {
				...state,
				active: false
			};
		default:
			return state;
	}
}
