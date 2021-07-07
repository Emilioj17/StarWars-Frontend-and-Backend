const getState = ({ getStore, setStore }) => {
	return {
		store: {
			personajesFavoritos: [],
			usuarioActual: [],
			ingreso: []
		},
		actions: {
			deleteFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: store.personajesFavoritos.filter(elemento => elemento !== nombre) });
			},

			deleteAllFavoritos: () => {
				setStore({ personajesFavoritos: [] })
			},

			saveFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: [...store.personajesFavoritos, nombre] });
			},

			postUsuario: (usuario) => {
				fetch("http://127.0.0.1:5000/crearcuenta", {
					method: "POST",
					body: JSON.stringify({ "nombre": usuario.nombre, "correo": usuario.correo, "clave": usuario.clave })
				})
					.then(res => res.json())
					.then(data => {
						setStore({ usuarioActual: [data.nombre, data.correo] });
						setStore({ ingreso: ["uno"] });
					}
					).catch(error => {
						console.error("Hay un problemilla", error);
					}
					)
			},

			getUsuario: (usuario) => {
				fetch("http://127.0.0.1:5000/login", {
					method: "POST",
					body: JSON.stringify({"correo": usuario.correo, "clave": usuario.clave})
				}).then(res => {
					if (res.status === 200) return res.json();
					else if (res.status === 401) {
						alert("Usuario o clave Incorrecto");
					}
				}).then(data => {
					setStore({ usuarioActual: [data[0], data[1]] });
					setStore({ ingreso: ["uno"] });
					}
				).catch(error => { console.error("Hay un problemilla", error) })
			},

			salirUsuario: () => {
				setStore({usuarioActual:[]})
			}
		},
	}
}

export default getState;
