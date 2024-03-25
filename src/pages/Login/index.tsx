import { Content, Label, LabelSignin, Strong, Container } from './styles';
import { MdEmail, MdLock } from 'react-icons/md';
import Input from '../../components/InputHookForm';
import Button from '../../components/Button';
import { IFormData } from './types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
	.object({ 
		email: yup.string().email('Please enter a valid email address').required('Email is required'),
		password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
	})
	.required();

const Login = () => {

	const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({ resolver: yupResolver(schema), mode: 'onChange' });

	const onSubmit = (formData: IFormData) => {
		console.log(formData.email, formData.password);
	};

	return (
		<Container>
			<Content>
				<Label style={{ fontSize: '30px' }}>Login</Label>
				<LabelSignin>
					Welcome back
					<br />
					Login and start exploring
				</LabelSignin>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						leftIcon={<MdEmail />}
						placeholder="Email"
						name="email"
						control={control}
						errorMessage={errors?.email?.message}
					/>
					<Input
						leftIcon={<MdLock />}
						type="password"
						placeholder="Password"
						name="password"
						control={control}
						errorMessage={errors?.password?.message}
					/>
					<Button text="Login" type="submit" disabled={isValid}></Button>
				</form>

				<LabelSignin>
					Don't have an account?
					<Strong>&nbsp;Register</Strong>
				</LabelSignin>
			</Content>
		</Container>
	);
};

export default Login;
