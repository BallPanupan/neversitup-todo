"use client"
import { useRef, useState } from 'react';
import styles from './registerForm.module.css';
import Link from 'next/link';

const RegisterForm = () => {

	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const [customError, setCustomError] = useState<string | null>(null);

	const handleRegister = async (event: React.FormEvent) => {
		event.preventDefault();
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		
		const raw = JSON.stringify({
			username: username.current?.value,
			password: password.current?.value,
		});

		const response = await fetch('/service/users', {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		})
		const data = await response.json()
		setCustomError(response.ok ? 'Done' : data.message);
	};

	const RegisterResult = () => {
		return (<p className={`d-flex justify-content-center ${ customError !== 'Done' ? 'color-red' : 'color-green' }`}>{customError}</p>)
	}

	return (
		<div className={`${styles.loginContainer} p-3`}>
			<form onSubmit={handleRegister}>
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

					{/* {customError && (
						<p className='d-flex justify-content-center color-red'>{customError}</p>
					)} */}
					<RegisterResult />
				</div>

				<div className='d-flex w-100 justify-content-center pb-5 gap-1'>
					<Link className='g-button' href={'/'}>
						Login
					</Link>
					<button className='g-button-green' type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
