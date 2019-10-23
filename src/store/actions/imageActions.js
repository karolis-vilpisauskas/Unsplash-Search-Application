import { FETCH_IMAGES } from "./types";
import axios from "axios";

export const fetchImages = () => async dispatch => {
	await axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
		dispatch({ type: FETCH_IMAGES, payload: res.data });
	});
};