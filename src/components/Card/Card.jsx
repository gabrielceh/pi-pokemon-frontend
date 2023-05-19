/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES_NAMES } from '../../utils/routes_name';
import { useModal } from '../../hooks/useModal';
import { typesIcons } from '../../utils/pokemonTypesImages';
import unknownPokemon from '../../assets/img/pokemon-unknown.png';
import { CardContainer, Name, PokemonInfo, TypeImg, TypesSection } from './Card.styled';
import ImageCard from './ImageCard';
import ModalDelete from '../EditDeleteMenu/ModalDelete';
import { deleteUserPokemon } from '../../redux/actions/pokemonUser.action';
import { isMobile } from '../../utils/userDeviceInfo';
import CardsMobile from './CardsMobile';
import CardUserContainer from './CardUserContainer';

function Card({ pokemon = {}, onClose = null }) {
	let { id, name, image, Types } = pokemon;
	const [isOpenDelete, openModalDelete, closeModalDelete] = useModal();

	const imagePk = image || unknownPokemon;

	const [isOpenImg, openImg, closeImg] = useModal();
	const userPokemon = pokemon?.Users ? pokemon.Users[0] : null;
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleMouseEnter = () => {
		openImg();
	};
	const handleMouseLeave = () => {
		closeImg();
	};

	const handleClick = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (onClose) {
			onClose();
		}
		navigate(`${ROUTES_NAMES.DETAIL}/${id}`);
	};

	const handleDelete = (event) => {
		event.preventDefault();
		dispatch(deleteUserPokemon(id));
	};

	const handleEdit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		navigate(`${ROUTES_NAMES.EDIT}/${id}`);
	};

	const handleOpenModalDetete = (event) => {
		event.preventDefault();
		event.stopPropagation();

		openModalDelete();
	};

	return (
		<>
			{isMobile.any() && (
				<CardsMobile
					pokemon={pokemon}
					handleClick={handleClick}
					handleEdit={handleEdit}
					handleOpenModalDetete={handleOpenModalDetete}
				/>
			)}
			{!isMobile.any() && (
				<CardContainer
					type={Types[0].name}
					className='animation-move-up container-card'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleClick}>
					<PokemonInfo>
						<Name type={Types[0].name}>{`#${id} ${name.toUpperCase()}`}</Name>

						<TypesSection>
							{Types.length &&
								Types.map((type) => (
									<TypeImg
										key={type.id}
										src={typesIcons(type.name)}
										alt={type.name}
									/>
								))}
						</TypesSection>
						{isOpenImg && (
							<ImageCard
								srcImg={imagePk}
								altImg={name}
								type={Types[0].name}
							/>
						)}
					</PokemonInfo>

					{userPokemon && (
						<CardUserContainer
							Types={Types}
							handleEdit={handleEdit}
							handleOpenModalDetete={handleOpenModalDetete}
							user={user}
							userPokemon={userPokemon}
						/>
					)}
				</CardContainer>
			)}

			{isOpenDelete && (
				<ModalDelete
					closeModal={closeModalDelete}
					onAccept={handleDelete}
					pokemonName={name}
					pokemonId={id}
				/>
			)}
		</>
	);
}

export default Card;
