import React from "react";
import "./Input.scss";

const Input = ({ type, setValue, name, placeholder, value }) => {
	const onChange = e => {
		setValue(e);
	};

	return (
		<div className="input-outter">
			<input
				className='input'
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default Input;
