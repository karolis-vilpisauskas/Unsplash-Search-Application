import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuery } from "../../store/actions/queryActions";
import { searchImages } from "../../store/actions/imageActions";
import "./ListItem.scss";

const ListItem = ({ label, index }) => {
	const dispatch = useDispatch();

	const delQuery = () => {
		dispatch(deleteQuery(index));
	};

	const getImages = () => {
		dispatch(searchImages(label));
	};

	return (
		<div className='list-item'>
			<div onClick={getImages}>{label}</div>
			<div onClick={delQuery} className='delete-list-item'>
				<span>x</span>
			</div>
		</div>
	);
};

export default ListItem;
