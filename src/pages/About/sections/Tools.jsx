/* eslint-disable react/prop-types */

import { ImageContainer, ImageTool, InfoArticle, LabelArticle } from '../About.styled';

function Tools({ tools }) {
	return (
		<InfoArticle>
			<LabelArticle>Tools</LabelArticle>
			<ImageContainer>
				{tools.map((tool) => (
					<ImageTool key={tool.label}>{tool.icon()}</ImageTool>
				))}
			</ImageContainer>
		</InfoArticle>
	);
}

export default Tools;
