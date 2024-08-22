import React, { useState } from 'react'
import styles from './todolist.module.css';
import Todo from '../Todo/Todo';

export default function TodoList() {

	const rawtodoList: any = [
		{
			id: 1,
			title: 1,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
		{
			id: 2,
			title: 2,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
		{
			id: 3,
			title: 3,
			content: 'contentcontentcontentcontent contentcontentcontentcontent',
			createDate: 'dd-mm-yyyy'
		},
	]

	const [todoListMessage, setTodoListMessage] = useState<string | null>(`Empty press 'Create' for add new todo`);
	
	const [todoList, setTodoList] = useState<any>(rawtodoList);
	const [removeTodo, setRemoveTodo] = useState<any>();
	const [confirmRemoveTodo, setConfirmRemoveTodo] = useState<Boolean>(false);

	console.log('removeTodo', removeTodo);


	const Display = () => {
		if (todoList.length > 0) {
			console.log(todoList)
			return (
				<>
					{todoList.map((data: any, index: number) => (
						<Todo 
							key={index} 
							props={data} 
							setRemoveTodo={setRemoveTodo}
						/>))}
				</>
			)
		}
		return todoListMessage
	}


	const handlerRemoveTodo = () => {
		setRemoveTodo(null)
	}

	const handlerConfirmRemoveTodo = (confirm: any) => {

		setTodoList(todoList.filter((data: any) => data.id !== removeTodo.id))

		setConfirmRemoveTodo(false)
		setRemoveTodo(null)
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
				<p>popup alert <span onClick={handlerRemoveTodo}>Close</span></p>


				{
					removeTodo ? <>
						<p onClick={()=> handlerConfirmRemoveTodo(!confirmRemoveTodo)}>Yes</p>
						{ removeTodo.title || '' }
					</>: null
				}

			</div>
		</div>
	)
}
