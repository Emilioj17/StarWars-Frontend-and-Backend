import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);

	const tamaño = store.personajesFavoritos;

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand text-warning mx-5" to="#" style={{ fontSize: "36px" }}>Star Wars</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/Home">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/personajes">Personajes</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/planetas">Planetas</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Naves</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Especies</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Peliculas</Link>
						</li>
					</ul>					
					<div style={{ float: "right"}}>
						<div class="btn-group">
							<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "18px" }}>
								Favoritos: {tamaño.length} <span className="text-danger" style={{ fontSize: "24px" }}>♥</span>
							</button>
							<ul class="dropdown-menu">
								<li> Uno </li>
								<li> Uno </li>
								<li> Uno </li>
								<li> Uno </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
