import LoginForm from '@/components/Login/Login'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if(token){
    redirect('/mytodo')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <LoginForm />
    </div>
  )
}

