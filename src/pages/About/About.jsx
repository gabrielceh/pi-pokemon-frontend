import { ContainerPage, ContainerStyled } from '../../styled/Container.styled';
import {
	Containerabout,
	DividerH,
	GridInfo,
	ImageContainer,
	ImageTool,
	ImgContainer,
	InfoArticle,
	InfoSection,
	LabelArticle,
	NameSection,
	Text,
	UserNamoMore,
} from './About.styled';
import aboutImg from '../../assets/img/about_main_picture.jpg';
import LinkedinIcon from '../../components/Icons/LinkedinIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import ReactIcon from '../../components/Icons/ReactIcon';
import TailwindIcon from '../../components/Icons/TailwindIcon';
import NodeICon from '../../components/Icons/NodeICon';
import NextJsICon from '../../components/Icons/NextIcon';
import MongoICon from '../../components/Icons/MongoICon';

function About() {
	const tools = [
		{ icon: ReactIcon, label: 'React' },
		{ icon: TailwindIcon, label: 'Tailwind' },
		{ icon: NodeICon, label: 'Node js' },
		{ icon: NextJsICon, label: 'Next js' },
		{ icon: MongoICon, label: 'MongoDb' },
	];

	const socials = [
		{ icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/gabo_cervantes/' },
		{
			icon: LinkedinIcon,
			label: 'Linkedin',
			href: 'https://www.linkedin.com/in/gabriel-cervantes-hurtado/',
		},
	];

	return (
		<ContainerPage
			className='detail'
			type='dark'>
			<ContainerStyled>
				<Containerabout>
					<ImgContainer>
						<img
							src={aboutImg}
							alt='Gabriel Cervantes'
						/>
					</ImgContainer>

					<InfoSection>
						<NameSection>
							Gabriel Cervantes <UserNamoMore>Full stack developer</UserNamoMore>
						</NameSection>
					</InfoSection>

					<DividerH />

					<GridInfo>
						<InfoArticle>
							<LabelArticle>Hello!</LabelArticle>
							<div>
								<Text>
									My name is Gabriel Cervantes Hurtado and I'm a web developer student in Henry.{' '}
									<br />
									For about 2 years I have been developing my skills in the world of web
									programming.
									<br />
									Currently, I am acquiring knowledge in the backend to be a Full Stack developer.
									<br />I have experience using JS, React and JS frameworks like Vue, Next, as well
									as Tailwind for css.
								</Text>
							</div>
						</InfoArticle>

						<DividerH />
						<InfoArticle>
							<LabelArticle>Tools</LabelArticle>
							<ImageContainer>
								{tools.map((tool) => (
									<ImageTool key={tool.label}>{tool.icon()}</ImageTool>
								))}
							</ImageContainer>
						</InfoArticle>

						<DividerH />
						<InfoArticle>
							<LabelArticle>My social networks</LabelArticle>
							<ImageContainer>
								{socials.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target='_blank'
										rel='noreferrer'>
										<ImageTool>{social.icon()}</ImageTool>
									</a>
								))}
							</ImageContainer>
						</InfoArticle>
					</GridInfo>
				</Containerabout>
			</ContainerStyled>
		</ContainerPage>
	);
}

export default About;
