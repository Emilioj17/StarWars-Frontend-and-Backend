import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/heroe.css";

export const Heroe = () => {
	const [count, setCount] = useState(true);
	const [jumbo, setJumbo] = useState(true);

	const handler = () => {
		setInterval(() => setCount(false), 5000);
	};

	const Jumbotron = () => {
		return (
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		);
	};

	return (
		<>
			<div className="fade" style={count ? { display: "" } : { display: "none" }} />
			<section className="star-wars" onMouseMove={handler} style={count ? { display: "" } : { display: "none" }}>
				<div className="crawl" onMouseMove={handler}>
					<div className="title" onMouseMove={handler}>
						<p>Episode IV</p>
						<h1>A New Hope</h1>
					</div>
					<p>
						It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first
						victory against the evil Galactic Empire.
					</p>
					<p>
						During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon,
						the DEATH STAR, an armored space station with enough power to destroy an entire planet.
					</p>
					<p>
						Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian
						of the stolen plans that can save her people and restore freedom to the galaxy….
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis voluptas accusantium quas
						repellat dolorum architecto voluptatem fugiat voluptatibus officiis deleniti, ipsum inventore!
						Vero qui praesentium officiis quidem iste est.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis voluptas accusantium quas
						repellat dolorum architecto voluptatem fugiat voluptatibus officiis deleniti, ipsum inventore!
						Vero qui praesentium officiis quidem iste est.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis voluptas accusantium quas
						repellat dolorum architecto voluptatem fugiat voluptatibus officiis deleniti, ipsum inventore!
						Vero qui praesentium officiis quidem iste est.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis voluptas accusantium quas
						repellat dolorum architecto voluptatem fugiat voluptatibus officiis deleniti, ipsum inventore!
						Vero qui praesentium officiis quidem iste est.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis voluptas accusantium quas
						repellat dolorum architecto voluptatem fugiat voluptatibus officiis deleniti, ipsum inventore!
						Vero qui praesentium officiis quidem iste est.
					</p>
				</div>
			</section>
			<div>
				<div className="jumbotron">
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<Link className="btn btn-primary btn-lg" to="/personajes" role="button">
						Busca en Nuestra Base de Datos
					</Link>
				</div>
			</div>
		</>
	);
};
