"use client"
import React, { useEffect, useState } from 'react'
import styles from './ModalDeleteTodo.module.css';

export default function ModalDeleteTodo({ show, onClose, message, confirmRemove }: any) {

	const deleteTodo = async (id: any) => {
		try {
			const response = await fetch(`/api/todo/${id}`, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json',
				},
				redirect: "follow"
			})
			if (!response.ok) {
				return false
			}
			confirmRemove(true)
			return true
		} catch {
			return false
		}
	}

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
