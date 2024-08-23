import React, { useState } from 'react'
import styles from './todo.module.css';

export default function Todo(props: any) {
	const { id, title, description, created_at } = props.props

  const handlerRemoveTodo = (data: any) => {
		props.setErrorMessage({
			id: data.id,
			title: data.title,
			message: data.content,
		})
  };

	const handlerEdotTodo = () => {
		props.setEditTodo(props.props)
	}

	return (
		<div className={styles.todo}>
			
			<div className='d-flex justify-content-between'>
				<div className='cursor-pointer' onClick={handlerEdotTodo}><h4> { title || 'title' } </h4></div>
				<div className='cursor-pointer' onClick={()=> handlerRemoveTodo({id, title, description, created_at})}>close</div>
			</div>

			<div className='cursor-pointer' onClick={handlerEdotTodo}>
				{ description }
			</div>
			<div className={`${styles.date} d-flex flex-direction-reverse`}>{ created_at || 'createDate' }</div>
		</div>
	)
}
