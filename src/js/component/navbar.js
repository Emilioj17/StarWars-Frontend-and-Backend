import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const tamaño = store.personajesFavoritos;
	const nombreUsuario = store.usuarioActual;

	const Favoritos = () => {
		if (nombreUsuario != "") {
			return (
				<>
					<button type="button" className="btn btn-warning dropdown-toggle m-2" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "18px" }}>
						Favoritos: {tamaño.length} <span className="text-danger" style={{ fontSize: "24px" }}>♥</span>
					</button>
					<ul className="dropdown-menu">
						{FavoritosSub}
					</ul>
				</>
			)
		} else {
			return (
				<>
				</>
			)
		}
	}
	
	const FavoritosSub = tamaño.map((personaje, index) => {
		return (
			<li key={index} className="m-1 p-2">{personaje}     <button className="btn btn-danger float-end ms-5" onClick={() => { actions.deleteFavoritos(personaje) }}>⊗</button></li>
		)
	})

	const Login = () => {
		if (nombreUsuario != "") {
			return (
				<div className="m-4">
					<Link to="#" style={{ color: "rgba(255, 255, 255, 0.61)", textDecoration: "none" }}>Bienvenido {nombreUsuario[0]}</Link>
				</div>
			)
		} else{
			return (
				<div className="m-4">
					<Link to="/login" style={{ color: "rgba(255, 255, 255, 0.61)", textDecoration: "none" }}>Ingresa</Link>
				</div>
			)
		}
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid navbar-dark bg-dark">
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
							<Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Naves</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Especies</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Peliculas</Link>
						</li>
					</ul>					
					<div style={{ float: "right" }}>
						<div className="btn-group">
							<Login />
							<Favoritos />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
