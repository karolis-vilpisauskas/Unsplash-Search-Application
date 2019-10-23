import React from "react";
import "./Sidebar.scss";

import Button from "../../components/Button";
import List from "../../components/List";

const Sidebar = () => {
	const onClick = () => {
		console.log();
	};
	return (
		<div className='sidebar'>
			<Button type='button' action={onClick} label='Search' />
			<Button type='button' action={onClick} label='Save' />
			<List />
		</div>
	);
};

export default Sidebar;
