import { FETCH_IMAGES, SEARCH_IMAGES, LOAD_MORE_IMAGES } from "./types";
import { startLoader, stopLoader } from "./loaderActions";
import axios from "axios";

const promiseTimeout = time => result =>
	new Promise(resolve => setTimeout(resolve, time, result));

export const fetchImages = () => dispatch => {
	dispatch(startLoader());
	axios
		.get("/photos?page=1&per_page=9")
		.then(promiseTimeout(800))
		.then(res => {
			dispatch({ type: FETCH_IMAGES, payload: res.data });
			dispatch(stopLoader());
		});
};

export const searchImages = keyword => dispatch => {
	dispatch(startLoader());
	axios
		.get(`/search/photos?query=${keyword}&page=1&per_page=9`)
		.then(promiseTimeout(800))
		.then(res => {
			dispatch({ type: SEARCH_IMAGES, payload: res.data.results });
			dispatch(stopLoader());
		});
};

export const loadMoreImages = (counter, keyword) => dispatch => {
	const path =
		keyword === ""
			? `/photos?page=${counter}&per_page=9`
			: `/search/photos?query=${keyword}&page=${counter}&per_page=9`;

	axios.get(path).then(res => {
		dispatch({
			type: LOAD_MORE_IMAGES,
			payload: keyword === "" ? res.data : res.data.results
		});
	});
};
