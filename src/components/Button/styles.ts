import styled, { css } from 'styled-components';

interface IButtonProps {
	width?: string;
	color?: string;
	font?: string;
	disabledProp?: boolean;
}

export const ButtonStyled = styled.button<IButtonProps>`
	padding: 16px 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	width: ${(props) => props.width || '100%'};
	cursor: pointer;
	background-color: ${(props) => props.color || '#2F9B2C'};
	color: white;
	font-weight: 600;
	font-size: 16px;
	max-width: 350px;
	letter-spacing: 1px;
	font-family: Inter, sans-serif;

	&:hover {
		opacity: 0.75;
	}

	${({ disabledProp }) => !disabledProp && css`

			&:disabled {
				pointer-events: none;
				cursor: not-allowed;
				opacity: 0.65;
				filter: alpha(opacity=65);
				-webkit-box-shadow: none;
				box-shadow: none;
			}

		`}
`;
