import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleQueries } from "../../store/actions/queryActions";
import "./Header.scss";

const Header = () => {
	const dispatch = useDispatch();
	const active = useSelector(state => state.queries.active);

	const dispatchToggle = () => {
		dispatch(toggleQueries());
	};

	return (
		<header className='header'>
			<div className='container'>
				<h1>Unsplash Image Search.</h1>
				<div id='menuToggle' onClick={dispatchToggle}>
					<input type='checkbox' defaultChecked={active} />
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
