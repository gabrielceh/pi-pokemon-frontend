export const base =
	import.meta.env.VITE_ENVIROMENT === 'development'
		? 'http://localhost:3001/pokemon-api'
		: 'https://pi-pokemon-d86i.onrender.com/pokemon-api';

export const endpoints = {
	pokemon: `pokemon`,
	pokemon_by_user: `pokemon/user`,
	pokemon_users: `pokemon/users/pokemon`,
	pokemon_api: `pokemon/api/pokemon`,
	login: `${base}/user/login`,
	register: `${base}/user/register`,
	logout: `${base}/user/logout`,
	types: `types`,
};
