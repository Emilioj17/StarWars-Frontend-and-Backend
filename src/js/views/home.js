import React from "react";
import "../../styles/home.css";
import { Heroe } from "../component/heroe";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-warning">May the force be with you</h1>
		<Heroe />
	</div>
);
