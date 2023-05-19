import styled from 'styled-components';

export const Circle = styled.div`
	width: 120px;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.darkBlue['400']};
	border-radius: 50%;
	border: ${({ theme }) => `7px solid ${theme.colors.slate['200']}`};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s ease-in-out;
`;

export const Letter = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xl_6};
	color: ${({ theme }) => theme.colors.slate['50']};
	padding: 0;
`;
