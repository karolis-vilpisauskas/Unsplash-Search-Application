import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/imageActions";
import "./Grid.scss";

import Bar from "../ProgressBar";
import GridItem from "../GridItem";

const Grid = () => {
	const images = useSelector(state => state.images.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchImages());
		return;
	}, [dispatch]);

	const gridItems = images.map(image => {
		return (
			<GridItem
				url={image.url}
				key={image.id}
				src={image.thumbnailUrl}
				title={image.title}
			/>
		);
	});

	return (
		<div className='w-100'>
			<Bar />
			<div className='image-grid'>{gridItems}</div>
		</div>
	);
};

export default Grid;
