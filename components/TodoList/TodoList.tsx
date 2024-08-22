import React, { useState } from 'react'
import styles from './todolist.module.css';
import Todo from '../Todo/Todo';

export default function TodoList() {

	const [todoListMessage, setTodoListMessage] = useState<string | null>(`Empty press 'Create' for add new todo`);

	// const todoList: any = [] //[1,2,3,4,5,6]
	const todoList: any = [
		{
			title: 1,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			date: 'dd-mm-yyyy'
		},
		{
			title: 2,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			date: 'dd-mm-yyyy'
		},
		{
			title: 3,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			date: 'dd-mm-yyyy'
		},
	]

	const Display = () => {

		if (todoList.length > 0) {
			return (
				todoList.map((data: any, index: number) => (<Todo key={index} content={data} />))
			)
		}
		return todoListMessage
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


		</div>
	)
}
