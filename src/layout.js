import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./js/component/scrollToTop";
import { Home } from "./js/views/home";
import { Personajes } from "./js/views/personajes";
import { Personaje } from "./js/views/personaje";
import { Planetas } from "./js/views/planetas";
import { Planeta } from "./js/views/planeta";
import { Login } from "./js/views/login";
import injectContext from "./js/store/appContext";
import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";
import "./styles/layout.css"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="central">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/personaje/:new_id">
							<Personaje />
						</Route>
						<Route exact path="/personaje">
							<Personaje />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/planeta">
							<Planeta />
						</Route>
						<Route exact path="/planeta/:new_id">
							<Planeta />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
