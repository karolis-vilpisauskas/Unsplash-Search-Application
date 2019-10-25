import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveQuery, setQuery } from "../../store/actions/queryActions";
import { searchImages } from '../../store/actions/imageActions';
import "./Search.scss";

import Button from "../../components/Button";
import Input from "../../components/Input";

const Search = () => {
    const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(saveQuery());
	};

	const onSearch = () => {
		dispatch(searchImages(value));
	}

	const onChange = e => {
		setValue(e.target.value);
		dispatch(setQuery(e.target.value));
	};

	return (
		<div className='search-wrapper'>
			<div className='input-wrapper'>
				<Input
					type='text'
					name='query'
					placeholder='Search Unsplash...'
					setValue={onChange}
					value={value}
				/>
			</div>

			<div className='button-wrapper'>
				<Button type='button' label='Search' action={onSearch} />
				<Button type='button' action={onClick} label='Save' />
			</div>
		</div>
	);
};

export default Search;
