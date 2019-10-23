import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/imageActions";
import "./Grid.scss";

import GridItem from "../GridItem";

const Grid = () => {
	const images = useSelector(state => state.images.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchImages());
		return;
	}, [dispatch]);

	const gridItems = images.map(image => {
		return <GridItem key={image.id} caption={image.title} />;
	});

	return gridItems;
};

export default Grid;
