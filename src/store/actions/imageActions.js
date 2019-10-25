import { FETCH_IMAGES, SEARCH_IMAGES } from "./types";
import axios from "axios";

export const fetchImages = () => dispatch => {
	axios
		.get("https://jsonplaceholder.typicode.com/photos?_limit=15")
		.then(res => {
			dispatch({ type: FETCH_IMAGES, payload: res.data });
		});
};

export const searchImages = keyword => dispatch => {
	console.log(keyword);
	axios
		.get(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
		.then(res => {
			dispatch({ type: SEARCH_IMAGES, payload: res.data });
		});
}