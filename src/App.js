import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Main />
			<Footer />
		</Provider>
	);
};

export default App;
