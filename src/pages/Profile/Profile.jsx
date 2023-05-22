import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPokemon, nextGetUserPokemon } from '../../redux/actions/pokemonUser.action';
import Cards from '../../components/Cards/Cards';
import { ContainerPage, ContainerStyled } from '../../styled/Container.styled';
import LoadingPage from '../../components/Loading/LoadingPage';
import { ButtonMore } from '../../styled/Button.styled';
import UserCircle from '../../components/UserCircle/UserCircle';
import { Img, UserHeader } from './Profile.styled';
import masterball from '../../assets/img/masterball.png';

function Profile() {
	const containerRef = useRef(null);
	const [heightContainer, setHeightContainer] = useState(0);

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const pokemonUser = useSelector((state) => state.pokemonUser);
	const loading = useSelector((state) => state.loading);

	const firstLetter = user.user.userName[0];

	useEffect(() => {
		if (containerRef.current) {
			const height = containerRef.current.offsetHeight;
			setHeightContainer(height);
		}
		if (!pokemonUser.results.length) {
			dispatch(getUserPokemon(user.user.userId));
		}
	}, []);

	const handleNext = () => {
		if (pokemonUser.next) {
			dispatch(nextGetUserPokemon(pokemonUser.next));
			window.scrollTo(0, heightContainer);
			const height = containerRef.current.offsetHeight;
			setHeightContainer(height);
		}
	};

	return (
		<ContainerPage ref={containerRef}>
			<ContainerStyled>
				<UserHeader className='animation-fade-in'>
					<Img
						src={masterball}
						alt='masterball'
					/>
					<UserCircle firstLetter={firstLetter} />
				</UserHeader>

				{loading && <LoadingPage />}
				{!loading && pokemonUser.results.length ? (
					<>
						<Cards data={pokemonUser.results} />
						{pokemonUser.next && (
							<ButtonMore
								disabled={loading}
								onClick={handleNext}>
								{loading ? 'Loading...' : 'More Pokémon'}
							</ButtonMore>
						)}
					</>
				) : (
					!loading && <h2>No Pokemon yet</h2>
				)}
			</ContainerStyled>
		</ContainerPage>
	);
}

export default Profile;
