/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiErrorReset } from '../../redux/actions/apieError.actions';
import { base } from '../../utils/endpoints';
import Cards from '../../components/Cards/Cards';
import { ContainerPage, ContainerStyled } from '../../styled/Container.styled';
import { MessageContainer, OptionsContainer, SelectsCont } from './Home.styled';
import LoadingPage from '../../components/Loading/LoadingPage';
import OrderSelect from '../../components/OrderSelect/OrderSelect';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import OriginSelect from '../../components/OriginSelect/OriginSelect';
import Pagination from '../../components/Pagination/Pagination';
import {
	getPokemonHome,
	setCurrenPageHome,
	setOrderPagHome,
	resetOrderHome,
	setEndpointHome,
} from '../../redux/actions/pokemonHome.action';

function Home() {
	const loading = useSelector((state) => state.loading);
	const apiError = useSelector((state) => state.apiError);
	const pokemonHome = useSelector((state) => state.pokemonHome);
	const dispatch = useDispatch();

	const fetchPokemonList = async (url) => {
		dispatch(getPokemonHome(url));
	};

	useEffect(() => {
		fetchPokemonList(`${base}/${pokemonHome.endPointPag}`);
		window.scrollTo(0, 0);

		return () => {
			dispatch(apiErrorReset());
		};
	}, [pokemonHome.endPointPag]);

	const handleOrder = (orderby, ordertype) => {
		dispatch(setOrderPagHome(orderby, ordertype));
		dispatch(setCurrenPageHome(1));
		const endpointSplited = pokemonHome.endPointPag.split('?')[0];
		const pag = `?offset=0&limit=${pokemonHome.limit}`;
		dispatch(setEndpointHome(`${endpointSplited}${pag}&orderby=${orderby}&ordertype=${ordertype}`));
	};

	const resetOrder = () => {
		if (pokemonHome.orderPag) {
			dispatch(resetOrderHome());
			dispatch(setCurrenPageHome(1));
			const pag = `?offset=0&limit=${pokemonHome.limit}`;
			const endpointSplited = pokemonHome.endPointPag.split('?')[0];
			dispatch(setEndpointHome(`${endpointSplited}${pag}`));
		}
	};

	const handleSetCurrentPage = (current) => {
		dispatch(setCurrenPageHome(current));
	};

	const handleSetEndpointPage = (endpoint) => {
		dispatch(setEndpointHome(endpoint));
	};

	return (
		<ContainerPage>
			<ContainerStyled>
				<OptionsContainer>
					<OrderSelect
						handleOrder={handleOrder}
						resetOrder={resetOrder}
						orderPag={pokemonHome.orderPag}
					/>
					<SelectsCont>
						<FilterSelect
							setEnpoint={handleSetEndpointPage}
							setCurrentPage={handleSetCurrentPage}
							setOrderPag={resetOrder}
						/>

						<OriginSelect
							setCurrentPage={handleSetCurrentPage}
							setEnpoint={handleSetEndpointPage}
							setOrderPag={resetOrder}
						/>
					</SelectsCont>
				</OptionsContainer>

				{loading && <LoadingPage />}

				{!loading && pokemonHome.data.length ? (
					<>
						<Cards data={pokemonHome.data} />

						<Pagination
							count={pokemonHome.count}
							limit={pokemonHome.limit}
							next={pokemonHome.next}
							prev={pokemonHome.prev}
							currentPage={pokemonHome.currentPage}
							setCurrentPage={handleSetCurrentPage}
							setEndPontPag={handleSetEndpointPage}
							endpoint={pokemonHome.endPointPag}
							orderPag={pokemonHome.orderPag}
						/>
					</>
				) : (
					!loading && (
						<MessageContainer>
							<h2>No Results</h2>
						</MessageContainer>
					)
				)}

				<MessageContainer>
					{!loading && apiError.error && <h2>{apiError.error}</h2>}
				</MessageContainer>
			</ContainerStyled>
		</ContainerPage>
	);
}

export default Home;
