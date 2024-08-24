import LoginForm from '@/components/Login/Login'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default function () {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if(!token){
    redirect('/')
  }

  return (
    <>
      <h1>my todo</h1>
    </>
  )
}

