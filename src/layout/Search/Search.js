import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveQuery, setQuery } from "../../store/actions/queryActions";
import { searchImages } from "../../store/actions/imageActions";
import "./Search.scss";

import Button from "../../components/Button";
import Input from "../../components/Input";

const Search = () => {
	const value = useSelector(state => state.queries.item);
	const dispatch = useDispatch();

	const dispatchSaveQuery = () => {
		dispatch(saveQuery());
	};

	const dispatchSearchImages = () => {
		dispatch(searchImages(value));
	};

	const dispatchSetQuery = e => {
		dispatch(setQuery(e.target.value));
	};

	return (
		<div className='search-wrapper'>
			<div className='input-wrapper'>
				<Input
					type='text'
					name='query'
					placeholder='Search Unsplash...'
					change={dispatchSetQuery}
					value={value}
				/>
			</div>

			<div className='button-wrapper'>
				<Button
					type='button'
					label='Search'
					action={dispatchSearchImages}
				/>
				<Button type='button' action={dispatchSaveQuery} label='Save' />
			</div>
		</div>
	);
};

export default Search;
