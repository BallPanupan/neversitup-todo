import { FormEvent, useState } from 'react';
import styles from './loginForm.module.css';
import Link from 'next/link';


const LoginForm = ({ username, setUsername, handleSubmit }: any) => {
	const [customError, setCustomError] = useState<any>('');

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault()
			const formData = new FormData(event.currentTarget);
			const formObject = Object.fromEntries(formData.entries());
			const raw = JSON.stringify(formObject);
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			const response = await fetch('/api/auth/login', {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			})

			const data = await response.json()

			if (!response.ok) {
				setCustomError(data.message)
			}
			console.log(data.message)


			return data
		} catch (error: any) {
			setCustomError(error.message)
			console.error(error)
		}
	}

	return (
		<div className={`${styles.loginContainer} p-3`}>

			<form onSubmit={onSubmit}>
				<div className='d-flex justify-content-center flex-direction-column p-3 gap-5'>
					<p>username</p>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						required
					/>
					<p>password</p>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="password"
						required
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
					>
						Login
					</button>
				</div>
			</form>

		</div>
	);
};

export default LoginForm;
