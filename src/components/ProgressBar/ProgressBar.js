import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({style}) => {
	return (
		<div className='progressbar-wrapper' style={style}>
			<div className='progressbar'>
				<div className='progress-style'></div>
			</div>
		</div>
	);
};

export default ProgressBar;
