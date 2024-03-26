import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main class='py-3'>
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
