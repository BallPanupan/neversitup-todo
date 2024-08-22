import { FormEvent, useRef, useState } from 'react';
import styles from './loginForm.module.css';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoginForm = ({}: any) => {

	const [customError, setCustomError] = useState<any>(null);
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const handleLogin = () => {
		signIn('credentials', {
			username: username.current?.value,
			password: password.current?.value,
			redirect: true,
			callbackUrl: '/',
		})
	}

	return (
		<div className={`${styles.loginContainer} p-3`}>

			<form onSubmit={handleLogin} method='POST'>
				<div className='d-flex justify-content-center flex-direction-column p-3 gap-5'>
					<p>username</p>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						required
						ref={username}
					/>
					<p>password</p>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="password"
						required
						ref={password}
					/>
					<p className='d-flex justify-content-center color-red'>{customError}</p>
				</div>

				<div className='d-flex w-100 justify-content-center pb-5 gap-1'>
					<Link
						className='g-button'
						href={'/register'}
					>Register</Link>
					<button
						className={styles.loginButton}
						type="submit"
						onClick={()=>handleLogin}
					>
						Login
					</button>
				</div>
			</form>

		</div>
	);
};

export default LoginForm;
