import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	max-width: 275px;
	height: 30px;
	border-bottom: 1px solid #3b3450;

	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const IconContainer = styled.div`
	margin-right: 10px;
`;

export const InputText = styled.input`
	background-color: transparent;
	color: #000000;
	flex: 1;
	border: 0;
	height: 30px;
    padding: 0 8px;
`;

export const ErrorText = styled.p`
	font-family: Inter, sans-serif;
	color: red;
	font-size: 12px;
	margin: 5px 0;
`;