import React from "react";
import { useSelector } from "react-redux";
import "./List.scss";

import ListItem from "../ListItem";

const List = () => {
	const queries = useSelector(state => state.queries.items);

	const queryItems = queries.map((query, i) => {
		return <ListItem keyword={query} key={i} index={i} />;
	});

	return (
		<div className='list'>
			<h3>Saved Searches</h3>
			{queries.length !== 0 ? queryItems : <p>No saved queries</p>}
		</div>
	);
};

export default List;
