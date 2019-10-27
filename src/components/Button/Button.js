import React from "react";
import "./Button.scss";

const Button = ({ type, label, action }) => {
	return (
		<button className='button' type={type} onClick={action}>
			{label}
		</button>
	);
};

export default Button;
