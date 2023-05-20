/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { BtnShowPass, ErrorMsg, Input, InputContainer, Label, PasswordCont } from './Input.styled';
import { DarkModeContext } from '../../context/DarkModeContext';
import EyeClose from '../Icons/EyeClose';
import EyeOpen from '../Icons/EyeOpen';

function InputForm({
	label,
	type,
	name,
	value,
	handleInput,
	error,
	placeholder = '',
	min = 0,
	max = 255,
}) {
	const [passShow, setPassShow] = useState(false);
	const { darkMode } = useContext(DarkModeContext);

	const handleShowPass = (event) => {
		event.preventDefault();
		setPassShow(!passShow);
	};

	return (
		<>
			{type !== 'password' ? (
				<InputContainer>
					<Label
						htmlFor={name}
						darkMode={darkMode}>
						{label}
					</Label>
					<Input
						type={type}
						value={value}
						name={name}
						id={name}
						onChange={handleInput}
						error={error ? true : false}
						placeholder={placeholder}
						darkMode={darkMode}
						min={min}
						max={max}
					/>
					{error ? <ErrorMsg>{error}</ErrorMsg> : <ErrorMsg> </ErrorMsg>}
				</InputContainer>
			) : (
				<InputContainer>
					<Label
						htmlFor={name}
						darkMode={darkMode}>
						{label}
					</Label>
					<PasswordCont>
						<Input
							type={passShow ? 'text' : 'password'}
							value={value}
							name={name}
							id={name}
							onChange={handleInput}
							error={error ? true : false}
							placeholder={placeholder}
							darkMode={darkMode}
							min={min}
							max={max}
						/>
						<BtnShowPass
							type='button'
							onClick={handleShowPass}>
							{passShow ? <EyeClose /> : <EyeOpen />}
						</BtnShowPass>
					</PasswordCont>
					{error ? <ErrorMsg>{error}</ErrorMsg> : <ErrorMsg> </ErrorMsg>}
				</InputContainer>
			)}
		</>
	);
}

export default InputForm;
