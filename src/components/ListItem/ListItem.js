import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuery, setQuery } from "../../store/actions/queryActions";
import { searchImages } from "../../store/actions/imageActions";
import "./ListItem.scss";

const ListItem = ({ keyword, index }) => {
	const dispatch = useDispatch();

	const delQuery = () => {
		dispatch(deleteQuery(index));
	};

	const getImages = () => {
		dispatch(setQuery(keyword));
		dispatch(searchImages(keyword));
	};

	return (
		<div className='list-item'>
			<div onClick={getImages}>{keyword}</div>
			<div onClick={delQuery} className='delete-list-item'>
				<span>x</span>
			</div>
		</div>
	);
};

export default ListItem;
