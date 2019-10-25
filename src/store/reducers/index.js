import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import queryReducer from "./queryReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
	images: imageReducer,
	queries: queryReducer,
	loader: loaderReducer
});
