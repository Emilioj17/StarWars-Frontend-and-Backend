import React from "react";
import { Link } from "react-router-dom";
import "../../styles/heroe.css";

export const Heroe = () => {
	return (
		<div className="jumbotron text-white p-5">
			<h1 className="display-4 text-start px-4">Que la Fuerza esté contigo</h1>
			<p className="lead text-start p-4 py-5">Bienvenido a este humilde espacio que corresponde a mi primera experiencia
				con React JS y React Router. Para su desarrollo se ha utilizado la Api de Swapi, que puedes encontrar
				en <a href="https://www.swapi.tech" target="_blank" rel="noopener noreferrer">www.swapi.tech</a>. La mayoría de las imagenes
				corresponden a la web de Jedipedia, esta la puedes consultar en <a href="https://www.jedipedia.net" target="_blank" rel="noopener noreferrer">www.jedipedia.net</a>.
			Espero que disfrutes el contenido.</p>
			<Link className="btn btn-primary btn-lg" to="/personajes" role="button">
				Busca en Nuestra Base de Datos
			</Link>
		</div>
	);
};
