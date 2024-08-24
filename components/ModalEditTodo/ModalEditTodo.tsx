"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './ModalEditTodo.module.css';

export default function ModalEditTodo({ show, onClose, data, listTodo, setListTodo }: any) {
  const [title, setTitle] = useState(data?.title || '');
  const [description, setDescription] = useState(data?.description || '');

  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      setDescription(data.description || '');
    }
  }, [data]);

	const updateTodo = async (todo: any) => {
		try {
			const raw = JSON.stringify({
				title: title,
				description: description,
			});
			const response = await fetch(`/api/todo/${todo.id}`, {
				method: "PATCH",
				headers: {
					'Content-Type': 'application/json',
				},
				body: raw,
				redirect: "follow"
			})
			if (!response.ok) {
				return false
			}
			return true
		} catch {
			return false
		}
	}

  const handleEdit = async () => {
    onClose();

		const updateArray = listTodo.map((obj: any) => {
			if (obj.id === data.id) {
				return {
					...obj,
					title: title,
					description: description
				};
			}
			return obj;
		});
		
		const update = await updateTodo({ id: data.id, title, description })
		console.log('update result', update)
		if(update) {
			setListTodo(updateArray)
		} else{
			// window.location.reload();
		}
  };

  const handlerClose = () => {
    onClose();
  };

  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handlerClose}>
          &times;
        </button>
        <h3>Edit: {data?.id}</h3>

				<label>Title</label>
        <div className='d-flex flex-direction-column gap-1'>
          <input
						className='w-100'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

					<label>Description</label>
          <textarea
						className='w-100'
            id="description"
            name="description"
            rows={4}
            cols={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>

        <div className="d-flex justify-content-center gap-1 p-1">
          <button className="g-button" onClick={handlerClose}>
            Cancel
          </button>
          <button className="g-button-green" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
