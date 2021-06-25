import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";

export const Planetas = () => {
	const [personajes, setPersonajes] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => {
				// console.log(data.results);
				setPersonajes(data.results);
			})
			.catch(err => (console.error(err), console.log("Error en useEffect")));
	}, []);

	const handler = name => {
		store.personajesFavoritos.includes(name) ? actions.deleteFavoritos(name) : actions.saveFavoritos(name);
		console.log(store.personajesFavoritos);
	};

	let listaImagenes = [
		"https://www.jedipedia.net/w/images/thumb/d/d7/Tatoooineause1ig.jpg/250px-Tatoooineause1ig.jpg",
		"https://www.jedipedia.net/w/images/thumb/1/1e/Alderaan_Weltraum-Ansicht.jpg/250px-Alderaan_Weltraum-Ansicht.jpg",
		"https://www.jedipedia.net/w/images/thumb/d/d3/Yavin_4.JPG/250px-Yavin_4.JPG",
		"https://www.jedipedia.net/w/images/thumb/d/d1/Hoth.jpg/250px-Hoth.jpg",
		"https://www.jedipedia.net/w/images/thumb/1/1c/Dagobah.jpg/250px-Dagobah.jpg",
		"https://www.jedipedia.net/w/images/thumb/1/1a/Bespin2.png/250px-Bespin2.png",
		"https://www.jedipedia.net/w/images/thumb/9/96/Endor-DB.png/250px-Endor-DB.png",
		"https://www.jedipedia.net/w/images/thumb/b/b3/Naboo_TCW.jpg/250px-Naboo_TCW.jpg",
		"https://www.jedipedia.net/w/images/thumb/e/ea/Coruscant_Ep01.jpg/250px-Coruscant_Ep01.jpg",
		"https://www.jedipedia.net/w/images/thumb/a/a9/Eaw_Kamino.jpg/250px-Eaw_Kamino.jpg"
	];

	const Lista = personajes.map((personaje, index) => {
		return (
			<div key={index} className="my-2">
				<div className="card m-0 p-0" style={{ width: "20vw" }}>
					<img className="card-img-top" src={listaImagenes[index]} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-center">{personaje.name}</h5>
						<Link to={"/planeta/" + personaje.uid} className="btn btn-primary float-left my-3">
							Saber más
						</Link>
						<Link
							to="#"
							onClick={name => handler(personaje.name)}
							className={`float-right display-4 p-0 m-0 ${
								store.personajesFavoritos.includes(personaje.name) ? "text-warning" : ""
							}`}>
							♥
						</Link>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="container bis" id="grid">
				{Lista}
			</div>
		</>
	);
};
