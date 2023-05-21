/* eslint-disable react/prop-types */
import { ImgContainer } from '../About.styled';

function ImageSection({ img, alt }) {
	return (
		<ImgContainer>
			<img
				src={img}
				alt={alt}
			/>
		</ImgContainer>
	);
}

export default ImageSection;
