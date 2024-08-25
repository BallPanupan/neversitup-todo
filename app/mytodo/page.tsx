import LogoutButton from '@/components/LogoutButton/LogoutButton';
import TodoList from '@/components/TodoList/TodoList';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;
  const username = cookieStore.get('username')?.value;

  if (!token) {
    redirect('/')
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    redirect: "follow"
  })
  const result = await response.json()
  return (
    <>
      <h1>my todo</h1>
      <h2>welcome {username} </h2>
      <TodoList data={result.data} />
      <LogoutButton />
    </>
  )
}

