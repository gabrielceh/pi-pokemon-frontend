/* eslint-disable react/prop-types */
import { InfoSection, Name, NameSpan } from '../About.styled';

function NameSection({ name, profession }) {
	return (
		<InfoSection>
			<Name>
				{name} <br /> <NameSpan>{profession}</NameSpan>
			</Name>
		</InfoSection>
	);
}

export default NameSection;
