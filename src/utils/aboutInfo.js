import InstagramIcon from '../components/Icons/InstagramIcon';
import LinkedinIcon from '../components/Icons/LinkedinIcon';
import MongoICon from '../components/Icons/MongoICon';
import NextICon from '../components/Icons/NextIcon';
import NodeICon from '../components/Icons/NodeICon';
import ReactIcon from '../components/Icons/ReactIcon';
import TailwindIcon from '../components/Icons/TailwindIcon';
import aboutImg from '../assets/img/about_main_picture.jpg';

export const aboutInfo = {
	name: 'Gabriel Cervantes',
	profession: 'Full stack developer',
	img: aboutImg,
	dscription: `My name is Gabriel Cervantes Hurtado and I'm a web developer student in Henry. \n
	For about 2 years I have been developing my skills in the world of web programming.
	\n
	Currently, I am acquiring knowledge in the backend to be a Full Stack developer.
	\n
	I have experience using JS, React and JS frameworks like Vue, Next, as well as
	Tailwind for css.`,
	tools: [
		{ icon: ReactIcon, label: 'React' },
		{ icon: TailwindIcon, label: 'Tailwind' },
		{ icon: NodeICon, label: 'Node js' },
		{ icon: NextICon, label: 'Next js' },
		{ icon: MongoICon, label: 'MongoDb' },
	],
	socials: [
		{
			icon: LinkedinIcon,
			label: 'Linkedin',
			href: 'https://www.linkedin.com/in/gabriel-cervantes-hurtado/',
		},
		{ icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/gabo_cervantes/' },
	],
};
