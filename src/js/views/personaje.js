import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/personaje.css";

let listaImagenes = [
	"https://www.jedipedia.net/w/images/thumb/0/03/Luke_auf_Ahch-To.jpg/495px-Luke_auf_Ahch-To.jpg",
	"https://www.jedipedia.net/w/images/d/dd/Ep1_c3po_anakin.jpg",
	"https://www.jedipedia.net/w/images/a/ae/R2-D2_Reperatur.jpg",
	"https://www.jedipedia.net/w/images/thumb/a/a2/Darth_Vader-Tantive_IV.jpg/758px-Darth_Vader-Tantive_IV.jpg",
	"https://www.jedipedia.net/w/images/thumb/5/5b/Leia_Blaster.jpg/800px-Leia_Blaster.jpg",
	"https://www.jedipedia.net/w/images/2/2d/Owen.jpg",
	"https://www.jedipedia.net/w/images/d/df/Beru.jpg",
	"https://www.jedipedia.net/w/images/thumb/2/2c/R5d4.jpg/250px-R5d4.jpg",
	"https://www.jedipedia.net/w/images/thumb/9/97/Biggs_Darklighter.jpg/250px-Biggs_Darklighter.jpg",
	"https://www.jedipedia.net/w/images/a/a2/Obi-Wan-Kenobi-oversized-postcard--C10229215.jpg"
];

export const Personaje = (props) => {
	const [personajes, setPersonajes] = useState({
		nombre: "",
		anonacimiento: "",
		altura: "",
		peso: "",
		descripcion: "",
		genero: ""
	});	
	const [charging, setCharging] = useState(true)
	const new_id = useParams();

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/people/" + new_id.new_id)
			.then(res => res.json())
			.then(data => {
				setPersonajes({
					nombre: data.result.properties.name,
					anonacimiento: data.result.properties.birth_year,
					altura: data.result.properties.height,
					peso: data.result.properties.mass,
					descripcion: data.result.description,
					genero: data.result.properties.gender
				});
				setCharging(false);
			})
			.catch(err => console.error(err));
	},[]);

	return (
		<>
			<div className="d-flex justify-content-center pt-2">
				<div class="spinner-border text-warning" role="status" style={charging ? { display: "" } : { display: "none" }}>
					<span class="sr-only"></span>
				</div>
			</div>
			<div className="centralP container">
				<div className="izquierdaP pt-2">{personajes.nombre}</div>
				<div className="derechaP card my-3 mx-0 px-0 py-2">
					<img
						className="card-img-top rounded imgp"
						src={listaImagenes[new_id.new_id - 1]}
						alt="Card cap"
					/>
					<div className="card-body container">
						<p className="card-text">
							{" "}
							Descripci??n: {personajes.descripcion}. Peso: {personajes.peso} Kg. Altura: {personajes.altura}{" "}
							cm. A??o de Nacimiento: {personajes.anonacimiento}.
						</p>
						<p className="card-text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat fugit laudantium beatae
							magni temporibus unde laboriosam tempore, quasi hic harum voluptatem, quae in quod, est nulla
							dolorum et sapiente.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
