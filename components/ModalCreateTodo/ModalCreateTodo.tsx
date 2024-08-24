"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './ModalCreateTodo.module.css';

export default function ModalCreateTodo({ show, onClose, listTodo, setListTodo}: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
  }, []);

	const handleCreate = async (todo: any) => {
		try {
      const raw = JSON.stringify({
        title: title,
        description: description
      });
      const response = await fetch('/api/todo', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: "follow"
      })
      const result = await response.json()
      result.data

      setListTodo([
        ...listTodo,
        result.data
      ])
      
      onClose(false)
			return true
		} catch {
			return false
		}
	}

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
        <h3>Create new todo</h3>

				<label>Title</label>
        <div className='d-flex flex-direction-column gap-1'>
          <input
						className='w-100'
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

					<label>Description</label>
          <textarea
						className='w-100'
            id="description"
            name="description"
            rows={4}
            cols={50}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center gap-1 p-1">
          <button className="g-button" onClick={handlerClose}>
            Cancel
          </button>
          <button className="g-button-green" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
