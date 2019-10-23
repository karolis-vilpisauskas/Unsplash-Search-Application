import React from "react";
import "./GridItem.scss";

const GridItem = ({ caption, src, url, alt }) => {
	return (
		<div>
			<h1>{caption}</h1>
		</div>
	);
};

export default GridItem;
