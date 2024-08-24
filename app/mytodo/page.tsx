import LogoutButton from '@/components/LogoutButton/LogoutButton';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default function () {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;
  const username = cookieStore.get('username')?.value;

  if(!token){
    redirect('/')
  }

  return (
    <>
      <h1>my todo</h1>
      <h2>welcome {username} </h2>
      <LogoutButton />
    </>
  )
}

