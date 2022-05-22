import React from 'react';
import { Context } from '../../Context/TokenContext';
import './login.css';

const Login = () => {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setToken({
			username: evt.target.elements.username.value,
			password: evt.target.elements.password.value,
		});
	};

	return (
		<div className='login-page'>
			<h1 className='login-page__title'>Log in to You Tube</h1>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div className='login-page__inner'>
					<input
						className='login-page__input'
						type='text'
						name='username'
						placeholder='Enter your name'
						required
					/>
				</div>
				<div className='login-page__inner'>
					<input
						className='login-page__input'
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
				</div>
				<button className='login-page__btn' type='submit'>
					Log In
				</button>
			</form>
			<div className='login-page__box'>
				<a className='login-page__link' href='#'>
					Forgot password?
				</a>
				<a className='login-page__link' href='#'>
					Sign up to Twitter
				</a>
			</div>
		</div>
	);
};

export default Login;
