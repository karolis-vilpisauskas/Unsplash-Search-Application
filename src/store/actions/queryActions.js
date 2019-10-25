import { SAVE_QUERY, SET_QUERY, DELETE_QUERY } from "./types";

export const setQuery = query => dispatch => {
	dispatch({ type: SET_QUERY, payload: query });
};

export const saveQuery = () => dispatch => {
	dispatch({ type: SAVE_QUERY });
};

export const deleteQuery = index => dispatch => {
	dispatch({ type: DELETE_QUERY, payload: index });
};
