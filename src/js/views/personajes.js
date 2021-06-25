import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";

export const Personajes = () => {
	const [personajes, setPersonajes] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				setPersonajes(data.results);
			})
			.catch(err => console.error(err));
	}, []);

	const handler = name => {
		store.personajesFavoritos.includes(name) ? actions.deleteFavoritos(name) : actions.saveFavoritos(name);
		console.log(store.personajesFavoritos);
	};

	let listaImagenes = [
		"https://www.jedipedia.net/w/images/thumb/0/03/Luke_auf_Ahch-To.jpg/495px-Luke_auf_Ahch-To.jpg",
		"https://www.jedipedia.net/w/images/d/dd/Ep1_c3po_anakin.jpg",
		"https://www.jedipedia.net/w/images/a/ae/R2-D2_Reperatur.jpg",
		"https://www.jedipedia.net/w/images/thumb/1/1b/Darth_Vader_auf_Mustafar.jpg/800px-Darth_Vader_auf_Mustafar.jpg",
		"https://www.jedipedia.net/w/images/thumb/5/5b/Leia_Blaster.jpg/800px-Leia_Blaster.jpg",
		"https://www.jedipedia.net/w/images/2/2d/Owen.jpg",
		"https://www.jedipedia.net/w/images/d/df/Beru.jpg",
		"https://www.jedipedia.net/w/images/thumb/2/2c/R5d4.jpg/250px-R5d4.jpg",
		"https://www.jedipedia.net/w/images/thumb/9/97/Biggs_Darklighter.jpg/250px-Biggs_Darklighter.jpg",
		"https://www.jedipedia.net/w/images/a/a2/Obi-Wan-Kenobi-oversized-postcard--C10229215.jpg"
	];

	const Lista = personajes.map((personaje, index) => {
		return (
			<div key={index} className="my-2">
				<div className="card m-0 p-0" style={{ width: "20vw" }}>
					<img className="card-img-top" src={listaImagenes[index]} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-center">{personaje.name}</h5>
						<Link to={"/personaje/" + personaje.uid} className="btn btn-primary float-left my-3">
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
