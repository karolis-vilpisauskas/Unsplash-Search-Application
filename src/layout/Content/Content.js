import React from "react";
import "./Content.scss";

import Input from "../../components/Input";
import Grid from "../../components/Grid";

const Content = () => {
	const onChange = () => {
		console.log("worked");
	};

	return (
		<div className='content'>
			<Input type='text' name='query' setInput={onChange} />
			<Grid />
		</div>
	);
};

export default Content;
