import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import queryReducer from "./queryReducer";

export default combineReducers({
	images: imageReducer,
	queries: queryReducer
});
