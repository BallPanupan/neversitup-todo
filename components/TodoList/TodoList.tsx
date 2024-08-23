import React, { useState } from 'react'
import styles from './todolist.module.css';
import Todo from '../Todo/Todo';
import Modal from '../Modal/Modal';

export default function TodoList() {
	interface ErrorMessage {
		id?: string,
		title?: string,
		message?: string,
	}

	const rawtodoList: any = [
		{
			id: 1,
			title: 'Hello Number 1',
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
		{
			id: 2,
			title: 'Hello Number 2',
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
		{
			id: 3,
			title: 'Hello Number 3',
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
	]

	const [todoListMessage, setTodoListMessage] = useState<string | null>(`Empty press 'Create' for add new todo`);
	const [todoList, setTodoList] = useState<any>(rawtodoList);
	const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});

	const Display = () => {
		if (todoList.length > 0) {
			console.log(todoList)
			return (
				<>
					{todoList.map((data: any, index: number) => (
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
			setTodoList(todoList.filter((data: any) => data.id !== errorMessage.id))
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
