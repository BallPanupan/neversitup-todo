"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './loginForm.module.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [customError, setCustomError] = useState<string | null>(null);
	const router = useRouter();

	const [user, setUser] = useState<any>();
	
  useEffect(() => {
    const saveTokenInCookie = async () => {
      if (user) {
				const raw = JSON.stringify({ 
					accessToken: user.accessToken,
					username: user.username 
				})
        await fetch('/api/set-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: raw,
        });
				router.push('/mytodo');
      }
    };
    saveTokenInCookie();
  }, [user]);

	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();

		const raw = JSON.stringify({
			username: username.current?.value,
			password: password.current?.value,
		});
		const response = await fetch('/service/auth/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: raw,
			redirect: "follow"
		})

		if (!response.ok) {
			setCustomError('login failed')
		}
		const user = await response.json()
		setUser({
			accessToken: user.access_token,
			username: user.username
		})
	
		return user
	};

	return (
		<div className={`${styles.loginContainer} p-3`}>
			<form onSubmit={handleLogin} method='POST'>
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
						<p className='d-flex justify-content-center color-red'>{customError}</p>
					)}
				</div>

				<div className='d-flex w-100 justify-content-center pb-5 gap-1'>
					<Link className='g-button' href={'/register'}>
						Register
					</Link>
					<button className='g-button-green' type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
