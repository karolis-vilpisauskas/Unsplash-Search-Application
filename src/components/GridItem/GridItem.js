import React from "react";
import "./GridItem.scss";

const GridItem = ({ title, src, url }) => {
	const style = {
		backgroundImage: `url(${src})`
	};

	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='image-grid-item'
		>
			<div className='grid-item-wrapper'>
				<div className='image' style={style}>
					<div className='image-title'>
						<p>{title}</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default GridItem;
