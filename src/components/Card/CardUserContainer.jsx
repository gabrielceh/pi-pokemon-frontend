/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import { ButtonCard } from '../../styled/Button.styled';
import { ROUTES_NAMES } from '../../utils/routes_name';
import DeleteIcon from '../Icons/DeleteICon';
import EditIcon from '../Icons/EditIcon';
import { UserContainer, UserSpan } from './Card.styled';

function CardUserContainer({
	classContainer = '',
	Types,
	userPokemon,
	user,
	handleEdit,
	handleOpenModalDetete,
}) {
	const location = useLocation();

	return (
		<UserContainer className={classContainer}>
			<UserSpan>Created by {userPokemon.userName}</UserSpan>
			{location.pathname === ROUTES_NAMES.PROFILE &&
				userPokemon?.userName === user?.user.userName && (
					<div>
						<ButtonCard
							type={Types[0].name}
							onClick={handleOpenModalDetete}>
							<DeleteIcon />
						</ButtonCard>
						<ButtonCard
							className='edit-icon'
							type={Types[0].name}
							onClick={handleEdit}>
							<EditIcon className='edit-icon' />
						</ButtonCard>
					</div>
				)}
		</UserContainer>
	);
}

export default CardUserContainer;
