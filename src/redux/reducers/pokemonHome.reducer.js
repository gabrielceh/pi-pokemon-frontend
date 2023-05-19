import { endpoints } from '../../utils/endpoints';
import {
	GET_POKEMON_HOME,
	SET_ORDER_HOME,
	RESET_ORDER_HOME,
	SET_CURRENT_PAGE_HOME,
	SET_ENDPOINT_HOME,
} from '../actions/pokemonHome.action';

const initialState = {
	data: [],
	count: 0,
	next: null,
	currentPage: 1,
	prev: null,
	endPointPag: endpoints.pokemon,
	orderPag: null,
	limit: 12,
};

export const pokemonHomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POKEMON_HOME:
			return {
				...state,
				data: action.payload.results,
				count: action.payload.count,
				next: action.payload.next,
				prev: action.payload.prev,
			};

		case SET_ORDER_HOME:
			return {
				...state,
				orderPag: { orderby: action.payload.orderby, ordertype: action.payload.ordertype },
				currentPage: 1,
			};

		case RESET_ORDER_HOME:
			return {
				...state,
				orderPag: null,
				currentPage: null,
			};

		case SET_CURRENT_PAGE_HOME:
			return {
				...state,
				currentPage: action.payload,
			};

		case SET_ENDPOINT_HOME:
			return {
				...state,
				endPointPag: action.payload,
			};

		default: {
			return state;
		}
	}
};
