"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import TodoList from '@/components/TodoList/TodoList'
import LoginForm from '@/components/Login/Login'

export default function () {
  const { data: session }: any = useSession();
  const [token, setToken] = useState(null);
  const [listTodo, setListTodo] = useState<any[]>([]);

  const getTodo = async () => {
    try {
      const response = await fetch('/service/todo', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        redirect: "follow"
      })

      if (!response.ok) {
        return []
      }
      const data = await response.json()
      return data.data
    } catch {
      return []
    }
  }

  useEffect(() => {
    if (session) {
      setToken(session.user?.access_token);
    }
  }, [session]);

  useEffect(() => {
    const fetchTodo = async () => {
        const todoList = await getTodo();
        setListTodo(todoList);
    };
    fetchTodo();
  }, [token]); 


  if (session) {
    return (
      <>
        <h1>Todo App</h1>
        Welcome {session.user?.username || ''} <br />

        <TodoList listTodo={listTodo} setListTodo={setListTodo} />

        <button className='mt-1' onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <LoginForm />
    </>
  )
}

