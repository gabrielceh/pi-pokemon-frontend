/* eslint-disable react/prop-types */
import ButtonPagination from './ButtonPagination';
import RightArrow from '../Icons/RightArrow';
import LeftArrow from '../Icons/LeftArrow';
import { ButtonsNumbers, PagContainer } from './Pagination.styled';

// eslint-disable-next-line react/prop-types
function Pagination({
	count,
	limit,
	next,
	prev,
	currentPage,
	setCurrentPage,
	setEndPontPag,
	endpoint = {},
	orderPag = null,
}) {
	const totalPages = Math.ceil(count / limit);

	const handleClick = (index) => {
		const orderString = orderPag
			? `&orderby=${orderPag?.orderby}&ordertype=${orderPag?.ordertype}`
			: '';

		const endpointSplited = endpoint.split('?')[0];

		setEndPontPag(`${endpointSplited}?offset=${(index - 1) * limit}&limit=${limit}${orderString}`);
		setCurrentPage(index);
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxVisible = 5;

		let startPage = 1;
		let lastPage = totalPages;

		if (totalPages > maxVisible) {
			// si current page esta mas  cerca de las paginas iniciales(1,2)
			if (currentPage <= Math.ceil(maxVisible / 2)) {
				lastPage = maxVisible;
			}
			// si current page esta mas  cerca de las paginas finales
			else if (currentPage >= totalPages - Math.floor(maxVisible / 2)) {
				startPage = totalPages - maxVisible + 1;
			} else {
				startPage = currentPage - Math.floor(maxVisible / 2);
				lastPage = currentPage + Math.floor(maxVisible / 2);
			}
		}

		for (let i = startPage; i <= lastPage; i++) {
			pageNumbers.push(
				<ButtonsNumbers
					key={i}
					onClick={() => handleClick(i)}
					className={currentPage === i ? 'focus' : ''}
					disabled={currentPage === i}
					label={i}>
					{i}
				</ButtonsNumbers>
			);
		}

		return pageNumbers;
	};

	return (
		<PagContainer className='pagination'>
			<ButtonPagination
				handleClick={() => handleClick(1)}
				label='1...'
			/>
			<ButtonPagination
				handleClick={() => handleClick(currentPage - 1)}
				disabled={prev ? false : true}
				label={<LeftArrow />}
			/>
			{renderPageNumbers()}
			<ButtonPagination
				handleClick={() => handleClick(currentPage + 1)}
				disabled={next ? false : true}
				label={<RightArrow />}
			/>
			<ButtonPagination
				handleClick={() => handleClick(totalPages)}
				label={`...${totalPages}`}
			/>
		</PagContainer>
	);
}

export default Pagination;
