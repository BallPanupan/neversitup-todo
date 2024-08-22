import { useRef, useState } from 'react';
import styles from './loginForm.module.css';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const [customError, setCustomError] = useState<string | null>(null);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		const result = await signIn('credentials', {
			username: username.current?.value,
			password: password.current?.value,
			redirect: true,
			callbackUrl: '/'
		});

		if (!result) {
			setCustomError("Invalid username or password");
		}
	};

	return (
		<div className={`${styles.loginContainer} p-3`}>
			<form onSubmit={handleLogin}>
				<div className='d-flex justify-content-center flex-direction-column p-3 gap-5'>
					<label className='d-flex flex-direction-column'>
						Username
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							required
							ref={username}
						/>
					</label>

					<label className='d-flex flex-direction-column'>
						Password
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							required
							ref={password}
						/>
					</label>

					{customError && (
						<p className='d-flex justify-content-center text-danger'>{customError}</p>
					)}
				</div>

				<div className='d-flex w-100 justify-content-center pb-5 gap-1'>
					<Link className='g-button' href={'/register'}>
						Register
					</Link>
					<button className={styles.loginButton} type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
