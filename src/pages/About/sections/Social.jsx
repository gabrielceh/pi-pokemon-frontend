/* eslint-disable react/prop-types */

import { ImageContainer, InfoArticle, LabelArticle, LinkSocial } from '../About.styled';

function Social({ socials }) {
	return (
		<InfoArticle>
			<LabelArticle>Contact</LabelArticle>
			<ImageContainer>
				{socials.map((social) => (
					<LinkSocial
						key={social.label}
						href={social.href}
						target='_blank'
						rel='noreferrer'>
						{social.icon()}
					</LinkSocial>
				))}
			</ImageContainer>
		</InfoArticle>
	);
}

export default Social;
