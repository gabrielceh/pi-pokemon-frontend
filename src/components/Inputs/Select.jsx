/* eslint-disable react/prop-types */
import { ErrorMsg, InputContainer, Label, SelectInput } from './Input.styled';

function Select({ label, name, defaultValue, onchange, data = [], error }) {
	return (
		<InputContainer>
			<Label htmlFor={name}>{label}</Label>
			<SelectInput
				name={name}
				id={name}
				defaultValue={defaultValue}
				onChange={onchange}>
				<option value=''>---SELECT---</option>
				{data.length &&
					data.map((type) => (
						<option
							key={type.id}
							value={type.id}>
							{type.name.toUpperCase()}
						</option>
					))}
			</SelectInput>
			{error ? <ErrorMsg>{error}</ErrorMsg> : <ErrorMsg> </ErrorMsg>}
		</InputContainer>
	);
}

export default Select;
