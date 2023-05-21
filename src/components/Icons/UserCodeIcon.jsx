const UserCodeIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={28}
		height={28}
		fill='none'
		stroke='#2c3e50'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1.5}
		className='icon icon-tabler icon-tabler-user-code'
		viewBox='0 0 24 24'
		{...props}>
		<path
			stroke='none'
			d='M0 0h24v24H0z'
		/>
		<path d='M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5M20 21l2-2-2-2M17 17l-2 2 2 2' />
	</svg>
);
export default UserCodeIcon;
