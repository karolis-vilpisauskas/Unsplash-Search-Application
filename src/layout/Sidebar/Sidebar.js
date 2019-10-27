import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.scss";

import List from "../../components/List";

const Sidebar = () => {
	const active = useSelector(state => state.queries.active);
	const isActive = active ? 'is-active' : '';
	
	return (
		<div className={`${isActive} sidebar`}>
			<div className='list-wrapper'>
				<List />
			</div>
		</div>
	);
};

export default Sidebar;
