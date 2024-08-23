import React, { useEffect, useState } from 'react'
import styles from './todolist.module.css';
import Todo from '../Todo/Todo';
import Modal from '../ModalDeleteTodo/ModalDeleteTodo';

export default function TodoList({listTodo, setListTodo}: any) {

	interface ErrorMessage {
		id?: string,
		title?: string,
		message?: string,
	}

	const [todoListMessage, setTodoListMessage] = useState<string | null>(`Empty press 'Create' for add new todo`);
	const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});

	const Display = () => {
		if (listTodo.length > 0) {
			return (
				<>
					{listTodo.map((data: any, index: number) => (
						<Todo
							key={index}
							props={data}
							setErrorMessage={setErrorMessage}
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

	return (
		<div className={styles.todoList}>

			<div className='d-flex flex-direction-column gap-1'>
				<Display />
			</div>


			<div className='d-flex justify-content-center p-1'>
				<button className={styles.loginButton} type="submit">
					+ Create
				</button>
			</div>

			<div>

				<Modal 
					show={errorMessage} 
					onClose={setErrorMessage} 
					message={errorMessage} 
					confirmRemove={confirmRemove}
				/>

			</div>
		</div>
	)
}
