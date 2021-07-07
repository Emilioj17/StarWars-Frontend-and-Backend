import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/personaje.css";
var regex2="[a-zA-Z0-9]{5,}";

export const Account = (props) => {
    const { store, actions } = useContext(Context);
    const [usuario, setUsuario] = useState({
        nombre: "",
        correo: "",
        clave: ""
    });

    const handlerIngreso = () => {
		// console.log(usuario);
        actions.postUsuario(usuario)
	};
    
    return (
        <div className="d-flex justify-content-center">
            <div className="container m-sm-3 m-md-5 p-3 p-md-5" style={{ minHeight: "400px" }}>
                <div className="p-2 pb-4" style={{color: "rgba(255, 255, 255, 0.61)", textShadow: "2px 2px 2px #050505"}}><h2>Crea tu Cuenta</h2></div>
                <form>
                    <div className="mb-3 text-white">
                        <label className="form-label">Direccion de Correo</label>
                        <input type="email" onChange={(e)=>setUsuario({...usuario, correo: e.target.value})} className="form-control" id="exampleInputEmail1"/>
                        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo. Debe tener formato valido</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Nombre</label>
                        <input type="text" onChange={(e)=>setUsuario({...usuario, nombre: e.target.value})} className="form-control" id="exampleInputNombre"/>
                        <div id="nameHelp" className="form-text">¿Cómo quieres que te llamemos?</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Clave</label>
                        <input type="password" onChange={(e)=>setUsuario({...usuario, clave: e.target.value})} className="form-control" id="exampleInputPassword1" pattern={regex2} />
                        <div id="passlHelp" className="form-text">Minimo 5 carácteres. Letras y/o Numeros. Mayusuculas y/o Minusuculas.</div>
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <button type="button" className="btn btn-warning" onClick={handlerIngreso}>Crear Cuenta</button>
                    </div>
                </form>
            </div>
        </div>
	);
};
