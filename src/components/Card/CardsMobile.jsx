/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import unknownPokemon from '../../assets/img/pokemon-unknown.png';
import { typesIcons } from '../../utils/pokemonTypesImages';
import { CardMobCont, ImgCard, ImgTypes, TypesSection, Name } from './CardMobile.styled';
import CardUserContainer from './CardUserContainer';

function CardsMobile({ pokemon, handleClick, handleEdit, handleOpenModalDetete }) {
	let { id, name, image, Types } = pokemon;
	const imagePk = image || unknownPokemon;

	const userPokemon = pokemon?.Users ? pokemon.Users[0] : null;
	const user = useSelector((state) => state.user);

	return (
		<CardMobCont
			type={Types[0].name}
			className='animation-move-up container-card-mobile'
			onClick={handleClick}>
			<div>
				<Name type={Types[0].name}>{`#${id} ${name.toUpperCase()}`}</Name>
				<ImgCard
					type={Types[0].name}
					src={imagePk}
					alt={name}
				/>

				<TypesSection>
					{Types.length &&
						Types.map((type) => (
							<ImgTypes
								key={type.id}
								src={typesIcons(type.name)}
								alt={type.name}
							/>
						))}
				</TypesSection>
			</div>

			{userPokemon && (
				<CardUserContainer
					Types={Types}
					handleEdit={handleEdit}
					handleOpenModalDetete={handleOpenModalDetete}
					user={user}
					userPokemon={userPokemon}
					classContainer='mobile'
				/>
			)}
		</CardMobCont>
	);
}

export default CardsMobile;
