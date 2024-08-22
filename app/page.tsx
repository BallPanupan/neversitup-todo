"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Page() {

  const { data: session } = useSession()

  console.log('session', session)

  if (session) {
    return (
      <>
        <h1>Main Page</h1>
        Hello {session.user?.name} <br />
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
