"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import TodoList from '@/components/TodoList/TodoList'
import LoginForm from '@/components/Login/Login'
export default function Page() {

  const { data: session }: any = useSession()


  if (session) {
    return (
      <>
        <h1>Todo App</h1>
        Welcome {session.user?.username || ''} <br />

        <TodoList />

        <button className='mt-1' onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <h1>Main Page</h1>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button>
      <Link className='g-button' href={'/register'}>
        Register
      </Link> */}

      <LoginForm />

    </>
  )
}
