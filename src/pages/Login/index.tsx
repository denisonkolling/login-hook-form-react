import { Content, Label, LabelError, LabelSignin, Strong, Container } from './styles';
import { Link } from 'react-router-dom';


import Input from '../../components/Input';
import Button from '../../components/Button';
import { ChangeEvent } from 'react';

const Login = () => {


	return (
		<Container>
			<Content>
				<Label style={{ fontSize: '30px' }}>
				</Label>
				<LabelSignin>
					Welcome back.
					<br />
					Sign in and start exploring.
				</LabelSignin>
				<Input
					type="email"
					// value={email}
					placeholder="Email" value={''} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
						throw new Error('Function not implemented.');
					} }					// onChange={(e) => [setEmail(e.target.value), setMessage('')]}
				/>
				<Input
					type="password"
					// value={password}
					placeholder="Password" value={''} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
						throw new Error('Function not implemented.');
					} }					// onChange={(e) => [setPassword(e.target.value), setMessage('')]}
				/>
				<LabelError>Message</LabelError>
				<Button text="Sign In" color="#2F9B2C" title={'Login'} variant={'submitt'} type={'button'}></Button>
				<LabelSignin>
					Don't have an account?
					<Strong>
						<Link to="/signup">&nbsp;Sign up</Link>
					</Strong>
				</LabelSignin>
			</Content>
		</Container>
	);
};

export default Login;