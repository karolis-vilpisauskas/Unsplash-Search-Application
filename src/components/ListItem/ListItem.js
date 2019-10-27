import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuery, setQuery, toggleQueries } from "../../store/actions/queryActions";
import { searchImages } from "../../store/actions/imageActions";
import "./ListItem.scss";

const ListItem = ({ keyword, index }) => {
	const dispatch = useDispatch();

	const dispatchDeleteQuery = () => {
		dispatch(deleteQuery(index));
	};

	const submitQuery = () => {
		dispatch(setQuery(keyword));
		dispatch(toggleQueries());
		dispatch(searchImages(keyword));
	};

	return (
		<div className='list-item'>
			<div onClick={submitQuery}>{keyword}</div>
			<div onClick={dispatchDeleteQuery} className='delete-list-item'>
				<span>x</span>
			</div>
		</div>
	);
};

export default ListItem;
