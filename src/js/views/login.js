import React from "react";
import "../../styles/personaje.css";

export const Login = (props) => {

	return (
        <div className="container">
            <form>
                <div className="mb-3 text-white">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label text-white" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary position-absolute top-50 start-50 translate-middle">Ingresar</button>
            </form>
		</div>
	);
};
