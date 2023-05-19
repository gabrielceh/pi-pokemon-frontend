import axios from 'axios';
import { apiErrorSet } from './apieError.actions';
import { loaderOff, loaderOn } from './loading.actions';

export const GET_POKEMON_HOME = 'GET_POKEMON_HOME';
export const RESET_ORDER_HOME = 'RESET_ORDER_HOME';
export const SET_ORDER_HOME = 'SET_ORDER_HOME';
export const SET_CURRENT_PAGE_HOME = 'SET_CURRENT_PAGE_HOME';
export const SET_ENDPOINT_HOME = 'SET_ENDPOINT_HOME';
export const SET_ORDER_PAGE_HOME = 'SET_ORDER_PAGE_HOME';

export const getPokemonHome = (url) => {
	return async function (dispatch) {
		dispatch(loaderOn());

		try {
			const { data } = await axios.get(url);
			dispatch({
				type: GET_POKEMON_HOME,
				payload: data,
			});
		} catch (error) {
			dispatch(apiErrorSet(error.response.data.error));
		} finally {
			dispatch(loaderOff());
		}
	};
};

export const setOrderPagHome = (orderby, ordertype) => {
	return {
		type: SET_ORDER_HOME,
		payload: { orderby, ordertype },
	};
};

export const resetOrderHome = () => {
	return {
		type: RESET_ORDER_HOME,
	};
};

export const setCurrenPageHome = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE_HOME,
		payload: currentPage,
	};
};

export const setEndpointHome = (endpoint) => {
	return {
		type: SET_ENDPOINT_HOME,
		payload: endpoint,
	};
};
