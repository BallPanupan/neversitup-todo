import React, { useEffect, useState } from 'react'
import styles from './ModalDeleteTodo.module.css';
// import { useSession } from 'next-auth/react';

export default function ModalDeleteTodo({ show, onClose, message, confirmRemove }: any) {
	// const { data: session }: any = useSession();
	const [token, setToken] = useState(null);

	const deleteTodo = async (id: any) => {
		try {
			const response = await fetch(`/service/todo/${id}`, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				redirect: "follow"
			})

			if (!response.ok) {
				return []
			}
			const data = await response.json()
			if (data.isSuccess) console.log(`delete ${id} is done`)
			onClose()
			confirmRemove(true)

			return data.data
		} catch {
			onClose()
			return []
		}
	}

	// useEffect(() => {
	// 	if (session) {
	// 		setToken(session.user?.access_token);
	// 	}
	// }, [session]);

	const id = message?.id;
	const title = message?.title;
	const description = message?.description;

	const handlerClose = () => {
		onClose()
	}

	if (!show?.id) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={handlerClose}>
					&times;
				</button>
				<p>Do you want to Delete: <span>{title}</span></p>
				<p>{description || null}</p>

				<div className='d-flex justify-content-center gap-1'>
					<button className={`g-button`} onClick={handlerClose}>
						Cancel
					</button>

					<button className={`g-button-red`} onClick={() => deleteTodo(id)}>
						Confirm
					</button>
				</div>

			</div>
		</div>
	)
}
