import React from "react";
import "./Input.scss";

const Input = ({ type, setInput, name }) => {
	const onChange = () => {
		setInput();
	};

	return (
		<input className='input' type={type} name={name} onChange={onChange} />
	);
};

export default Input;
