const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajesFavoritos: [],
			planetasFavoritos: [],
			navesFavoritos: []
		},
		actions: {
			deleteFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: store.personajesFavoritos.filter(elemento => elemento != nombre) });
				return "Hola desde deleteFavoritos";
			},

			saveFavoritos: nombre => {
				const store = getStore();
				setStore({ personajesFavoritos: [...store.personajesFavoritos, nombre] });
				return "Hola desde saveFavoritos";
			}
		}
	};
};

export default getState;
