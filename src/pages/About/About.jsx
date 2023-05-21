import { ContainerPage, ContainerStyled } from '../../styled/Container.styled';
import { Containerabout, DividerH, GridInfo } from './About.styled';
import { aboutInfo } from '../../utils/aboutInfo';
import Description from './sections/Description';
import Tools from './sections/Tools';
import Social from './sections/Social';
import ImageSection from './sections/ImageSection';
import { useEffect } from 'react';
import NameSection from './sections/NameSection';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ContainerPage
			className='animation-fade-in detail'
			type='dark'>
			<ContainerStyled>
				<Containerabout>
					<ImageSection
						img={aboutInfo.img}
						alt={aboutInfo.name}
					/>
					<NameSection
						name={aboutInfo.name}
						profession={aboutInfo.profession}
					/>
					<DividerH />
					<GridInfo>
						<Description description={aboutInfo.dscription} />
						<DividerH />
						<Tools tools={aboutInfo.tools} />
						<DividerH />
						<Social socials={aboutInfo.socials} />
					</GridInfo>
				</Containerabout>
			</ContainerStyled>
		</ContainerPage>
	);
}

export default About;
