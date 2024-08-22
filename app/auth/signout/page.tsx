"use client"
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {
  const { data: session } = useSession()

  if (!session) {
		window.location.href = '/auth/signin'
  }

	return (
		<div>
			<div>SignOut page</div>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	)
}
