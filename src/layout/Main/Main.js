import React from "react";
import "./Main.scss";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Search from "../Search";

const Main = () => {
	return (
		<section className='main'>
			<div className='container'>
				<Search />
			</div>
			<div className='container'>
				<Content />
				<Sidebar />
			</div>
		</section>
	);
};

export default Main;
