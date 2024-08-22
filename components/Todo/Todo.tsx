import React, { useState } from 'react'
import styles from './todo.module.css';

export default function Todo(props: any) {
	const { id, title, content, createDate } = props.props
  const handlerRemoveTodo = (data: any) => {
		props.setRemoveTodo(data);
  };
	return (
		<div className={styles.todo}>
			
			<div className='d-flex justify-content-between'>
				<div><h4> { title || 'title' } </h4></div>
				<div className='cursor-pointer' onClick={()=> handlerRemoveTodo({id, title, content, createDate})}>close</div>
			</div>

			<div>
				{ content || 'content' }
			</div>
			<div className={`${styles.date} d-flex flex-direction-reverse`}>{ createDate || 'createDate' }</div>
		</div>
	)
}
