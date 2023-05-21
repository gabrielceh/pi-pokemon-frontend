/* eslint-disable react/prop-types */
import { InfoArticle, LabelArticle, Text } from '../About.styled';

function Description({ description }) {
	return (
		<InfoArticle>
			<LabelArticle>Hello!</LabelArticle>
			{/* <div> */}
			<Text>
				{/* My name is Gabriel Cervantes Hurtado and I&apos;m a web developer student in Henry. <br />
					For about 2 years I have been developing my skills in the world of web programming.
					<br />
					Currently, I am acquiring knowledge in the backend to be a Full Stack developer.
					<br />I have experience using JS, React and JS frameworks like Vue, Next, as well as
					Tailwind for css. */}
				{description}
			</Text>
			{/* </div> */}
		</InfoArticle>
	);
}

export default Description;
