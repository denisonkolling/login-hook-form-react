import styled from 'styled-components';

export const Content = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	box-shadow: 0 1px 2px #0003;
	background-color: white;
	max-width: 350px;
	padding: 20px;
	border-radius: 5px;
`;

export const Label = styled.label`
	font-family: Inter, sans-serif;
	font-size: 18px;
	font-weight: 600;
	color: #676767;
`;

export const Strong = styled.strong`
	font-family: Inter, sans-serif;
	cursor: pointer;

	a {
		text-decoration: none;
		color: #676767;
	}
`;

export const LabelSignin = styled.label`
	font-family: Inter, sans-serif;
	font-size: 16px;
	color: #676767;
	text-align: center;
	line-height: 1.5;
	margin-bottom: 15px;
`;

export const LabelError = styled.label`
	font-family: Inter, sans-serif;
	font-size: 14px;
	color: red;
`;

interface IContainerProps {
	height?: string;
}

export const Container = styled.div<IContainerProps>`
	font-family: Inter, sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	height: ${(props) => props.height};
`;