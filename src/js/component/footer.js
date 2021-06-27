import React from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center navbar-dark bg-dark" style={{minHeight:"150px", color: "rgba(255, 255, 255, 0.61)"}}>
		<div className="footer1">
			Puedes encontrar mi Perfil Profesional en:
			<p><a href="https://www.linkedin.com/in/emilio-jelves/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
		</div>
		<div className="footer2">
			Puedes encontrar mi Perfil de Programador en:
			<p><a href="https://github.com/Emilioj17" target="_blank" rel="noopener noreferrer">GitHub</a></p>
		</div>
		<div className="footer3">
			Puedes encontrar mi Perfil Social en:
			<p><a href="https://twitter.com/JelvesEmilio" target="_blank" rel="noopener noreferrer">Twitter</a></p>
		</div>
		<div className="footer4 text-warning">
			<p>Que la Fuerza esté contigo.</p>
			<p>Página desarrollada en Junio 2021</p>
		</div>
	</footer>
);

