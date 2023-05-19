import styled from 'styled-components';

export const UserHeader = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	margin-bottom: 3.5rem;
`;

export const Img = styled.img`
	width: 100px;
	height: auto;

	@media (${({ theme }) => theme.screenSize.tablet}) {
		width: 150px;
	}
`;
