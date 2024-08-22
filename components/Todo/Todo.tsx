import React from 'react'
import styles from './todo.module.css';

export default function Todo(key: any, data: any) {
	console.log(data);
	const {title, content, date} = data;

	return (
		<div className={styles.todo} key={key}>
			
			<div className='d-flex justify-content-between'>
				<div><h4> { title || 'title' } </h4></div>
				<div className='cursor-pointer'>close</div>
			</div>

			<div>
				{ content || 'content: todo description' }
			</div>
			<div className={`${styles.date} d-flex flex-direction-reverse`}>{ date || 'date' }</div>
		</div>
	)
}
