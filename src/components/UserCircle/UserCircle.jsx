import { Circle, Letter } from './UserCircle.styled';

/* eslint-disable react/prop-types */
function UserCircle({ firstLetter }) {
	return (
		<Circle>
			<Letter>{firstLetter}</Letter>
		</Circle>
	);
}

export default UserCircle;
