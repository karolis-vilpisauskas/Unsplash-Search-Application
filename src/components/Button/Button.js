import React from "react";
import "./Button.scss";

const Button = ({ type, label, action }) => {
	const onClick = () => {
		action();
	};

	return (
		<button className='button' type={type} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
