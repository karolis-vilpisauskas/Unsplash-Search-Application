import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, loadMoreImages } from "../../store/actions/imageActions";
import "./Grid.scss";

import Bar from "../ProgressBar";
import GridItem from "../GridItem";
import Button from "../Button";

const Grid = () => {
	const [loadingStyle, setLoadingStyle] = useState({
		grid: { opacity: 1, transform: "translateY(0)" },
		bar: { opacity: 0, transform: "translateY(-20px)" }
	});

	const page = useSelector(state => state.images.page);
	const totalPages = useSelector(state => state.images.total_pages);
	const images = useSelector(state => state.images.items);
	const loader = useSelector(state => state.loader.active);
	const query = useSelector(state => state.queries.item);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchImages());
		return;
	}, [dispatch]);

	useEffect(() => {
		const opacityIndex = loader ? [0, 1] : [1, 0];
		const transformIndex = loader ? ["-20px", 0] : [0, "-20px"];
		setLoadingStyle({
			grid: {
				opacity: opacityIndex[0],
				transform: `translateY(${transformIndex[0]})`
			},
			bar: {
				opacity: opacityIndex[1],
				transform: `translateY(${transformIndex[1]})`
			}
		});
		return;
	}, [loader]);

	const loadMore = () => {
		dispatch(loadMoreImages(page, query));
	};

	const ifImages = typeof images !== "undefined" && images.length > 0;
	const gridItems = images.map(image => {
		return (
			<GridItem
				url={image.urls.full}
				key={image.id}
				src={image.urls.small}
				title={image.description}
			/>
		);
	});

	return (
		<div className='w-100 text-center'>
			<Bar style={loadingStyle.bar} />
			<div className='image-grid' style={loadingStyle.grid}>
				{ifImages ? (
					gridItems
				) : (
					<h2>Oops! No images have been found.</h2>
				)}
			</div>
			{ifImages && images.length >= 12 && totalPages >= page ? (
				<Button label='Load More' type='button' action={loadMore} />
			) : (
				""
			)}
		</div>
	);
};

export default Grid;
