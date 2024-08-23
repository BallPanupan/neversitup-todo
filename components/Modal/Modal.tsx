import React from 'react'
import styles from './modal.module.css';

export default function Modal({ show, onClose, message, confirmRemove}: any) {

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
				<p>Want Delete: {`${id} ${title}`}</p>
				<p>{ description || null }</p>

				<div className='d-flex justify-content-center gap-1'>
					<button className={`g-button`} onClick={handlerClose}>
						No
					</button>

					<button className={`g-button-red`} onClick={confirmRemove}>
						Yes
					</button>
				</div>

			</div>
		</div>
	)
}
