import { FETCH_IMAGES, SEARCH_IMAGES, LOAD_MORE_IMAGES } from "./types";
import { startLoader, stopLoader } from "./loaderActions";
import axios from "axios";

const promiseTimeout = time => result =>
	new Promise(resolve => setTimeout(resolve, time, result));

export const fetchImages = () => dispatch => {
	dispatch(startLoader());
	axios
		.get(`https://jsonplaceholder.typicode.com/photos?_limit=9`)
		.then(promiseTimeout(500))
		.then(res => {
			dispatch({ type: FETCH_IMAGES, payload: res.data });
			dispatch(stopLoader());
		});
};

export const searchImages = keyword => dispatch => {
	dispatch(startLoader());
	axios
		.get(
			`https://jsonplaceholder.typicode.com/photos?q=${keyword}&_limit=9`
		)
		.then(promiseTimeout(500))
		.then(res => {
			dispatch({ type: SEARCH_IMAGES, payload: res.data });
			dispatch(stopLoader());
		});
};

export const loadMoreImages = (counter, keyword) => dispatch => {
	axios
		.get(
			`https://jsonplaceholder.typicode.com/photos?${
				keyword !== "" ? `q=${keyword}&` : ""
			}_start=${counter}&_end=${counter + 9}`
		)
		.then(res => {
			dispatch({ type: LOAD_MORE_IMAGES, payload: res.data });
		});
};
