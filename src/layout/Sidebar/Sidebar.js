import React from "react";
import "./Sidebar.scss";

import List from "../../components/List";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='list-wrapper'>
				<List />
			</div>
		</div>
	);
};

export default Sidebar;
