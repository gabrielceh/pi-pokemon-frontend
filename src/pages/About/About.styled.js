import styled from 'styled-components';

export const Containerabout = styled.article`
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	@media (${({ theme }) => theme.screenSize.tablet}) {
		max-width: 1280px;
		margin: 0 auto;
	}
`;

export const ImgContainer = styled.section`
	align-self: self-end;

	& img {
		width: 100%;
		min-width: 270px;
		max-width: 400px;
		height: auto;
		border-radius: 50%;
		filter: ${({ theme }) => `drop-shadow(6px 6px 3px ${theme.pokemonColors['dark'].dark})`};
	}
`;

export const InfoSection = styled.section`
	/* align-self: flex-start; */
	color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	font-weight: 600;

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}
`;

export const NameSection = styled.h1`
	font-size: ${({ theme }) => theme.fontSize.xl_3};
	letter-spacing: 0.2rem;
	font-weight: 800;
	@media (${({ theme }) => theme.screenSize.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.xl_5};
	}
	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}
`;

export const UserNamoMore = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xl};

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}

	@media (${({ theme }) => theme.screenSize.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.xl_2};
	}
`;

export const DividerH = styled.div`
	width: 100%;
	height: 1px;
	margin: 1rem 0;
	background-color: ${({ theme }) => theme.pokemonColors['dark'].medium};
`;

export const GridInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InfoArticle = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	@media (${({ theme }) => theme.screenSize.tablet}) {
		flex-direction: row;
	}
`;

export const LabelArticle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xl_2};
	color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	letter-spacing: 0.2rem;
	font-weight: 700;

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}
`;

export const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSize.xl};
	text-align: justify;
	color: ${({ theme }) => theme.pokemonColors['dark'].dark};

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}
`;

export const ImagesTypesCont = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const ImageTool = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& svg {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
	}
`;

export const ImageTypeCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ImageType = styled.img`
	width: 60px;
	@media (${({ theme }) => theme.screenSize.tablet}) {
		width: 70px;
	}
`;

export const TypeName = styled.p`
	color: ${({ theme }) => theme.pokemonColors['dark'].medium};
	font-weight: 500;

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}
`;

export const InfoLabel = styled.p`
	text-align: right;
	margin: 0.2rem auto;

	&::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}

	& span::selection {
		color: ${({ theme }) => theme.pokemonColors['dark'].light};
		background-color: ${({ theme }) => theme.pokemonColors['dark'].dark};
	}

	@media (${({ theme }) => theme.screenSize.tablet}) {
		text-align: left;
	}
`;
