"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import TodoList from '@/components/TodoList/TodoList'
export default function Page() {

  const { data: session }: any = useSession()


  if (session) {
    return (
      <>
        <h1>Todo App</h1>
        Welcome {session.user?.username || ''} <br />

        <TodoList />

        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <h1>Main Page</h1>
      <div>page</div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
