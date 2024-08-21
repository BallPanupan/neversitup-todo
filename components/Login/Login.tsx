import styles from './loginForm.module.css';

const LoginForm = ({ username, setUsername, handleSubmit }: any) => {
	return (
		<div className={`${styles.loginContainer} p-3 `}>

			<div className='d-flex justify-content-center flex-direction-column p-3 gap-5'>
				<p>username</p>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					value={username}
					// onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<p>password</p>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
					value={username}
					// onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>


			<div className='d-flex w-100 justify-content-center pb-5'>
				<button
					className={styles.loginButton}
					type="submit"
					onClick={handleSubmit}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
