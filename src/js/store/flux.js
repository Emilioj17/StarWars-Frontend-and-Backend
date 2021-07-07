const getState = ({ getStore, setStore }) => {
	return {
		store: {
			personajesFavoritos: [],
			usuarioActual: [],
			bdUsuarios : []
		},
		actions: {
			deleteFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: store.personajesFavoritos.filter(elemento => elemento !== nombre) });
				return "Hola desde deleteFavoritos";
			},

			saveFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: [...store.personajesFavoritos, nombre] });
				// console.log(store)
				return "Hola desde saveFavoritos";
			},

			postUsuario: (usuario) => {
				fetch("http://127.0.0.1:5000/api/usuarios", {
					method: "POST",
					body: JSON.stringify({ "nombre": usuario.nombre, "correo": usuario.correo, "clave": usuario.clave })
				})
					.then(res => res.json())
					.then(setStore({usuarioActual:[usuario.nombre, usuario.correo]})
				)
					.catch(err => console.error(err))
			},

			// logUsuario: (usuario) => {
			// 	console.log("Hello desde logUsuario");
			// 	setStore({usuarioActual:[usuario.correo]})
			// },

			getUsuario: () => {
				// console.log("Hello desde getUsuario");
				fetch("http://127.0.0.1:5000/api/usuarios", {
					method: "GET"
				}).then(res => res.json()).then(data => console.log(data) 
					// ; { setStore({ bdUsuarios: [data] }) }
				)


				//fetch("http://127.0.0.1:5000/api/usuarios",)
				//     .then(res => res.json())
				//     .then(data => {console.log(data);
				//     }).catch(err => (console.error(err)))
				
			},
			
		}
	};
};

export default getState;
