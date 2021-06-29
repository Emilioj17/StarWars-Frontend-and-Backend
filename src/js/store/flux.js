const getState = ({ getStore, setStore }) => {
	return {
		store: {
			personajesFavoritos: []
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
				console.log(store)
				return "Hola desde saveFavoritos";
			}
		}
	};
};

export default getState;
