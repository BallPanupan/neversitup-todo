"use client"
import React, { useEffect, useState } from 'react'
import styles from './todolist.module.css';
import Todo from '../Todo/Todo';
import ModalDeleteTodo from '../ModalDeleteTodo/ModalDeleteTodo';
import ModalEditTodo from '../ModalEditTodo/ModalEditTodo';
import ModalCreateTodo from '../ModalCreateTodo/ModalCreateTodo';

interface ErrorMessage {
	id?: string,
	title?: string,
	message?: string,
}

export default function TodoList({data}: any) {
	const [listTodo, setListTodo] = useState<any>(data || []);

	useEffect(()=>{
	}, [listTodo])

	const [todoListMessage, setTodoListMessage] = useState<string | null>(`Empty press 'Create' for add new todo`);
	const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});


	const [editTodo, setEditTodo] = useState<any>();
	const [closeCreateTodo, setCloseCreateTodo] = useState<boolean>(false);


	const closeEdit = () => {
		setEditTodo(null)
	}

	const Display = () => {
		if (listTodo.length > 0) {
			return (
				<>
					{listTodo.map((data: any, index: number) => (
						<Todo
							key={index}
							props={data}
							setErrorMessage={setErrorMessage}
							setEditTodo={setEditTodo}
						/>))}
				</>
			)
		}
		return todoListMessage
	}

	const confirmRemove = (confirm: boolean) =>{
		if(confirm){
			setListTodo(listTodo.filter((data: any) => data.id !== errorMessage.id))
			setErrorMessage({})
		}
	}

	const createTodo = () => {
		setCloseCreateTodo(!closeCreateTodo)
	}


	return (
		<div className={styles.todoList}>

			<div className='d-flex flex-direction-column gap-1'>
				<Display />
			</div>


			<div className='d-flex justify-content-center p-1'>
				<button className={styles.loginButton} type="submit" onClick={createTodo}>
					+ Create
				</button>
				<ModalCreateTodo
					show={closeCreateTodo}
					onClose={setCloseCreateTodo}
					listTodo={listTodo} 
					setListTodo={setListTodo}
				/>
			</div>

			<div>

				<ModalDeleteTodo
					show={errorMessage}
					onClose={setErrorMessage}
					message={errorMessage}
					confirmRemove={confirmRemove}
				/>

				<ModalEditTodo
					show={editTodo}
					onClose={closeEdit} 
					data={editTodo} 
					listTodo={listTodo}
					setListTodo={setListTodo}
				/>

			</div>
		</div>
	)
}
