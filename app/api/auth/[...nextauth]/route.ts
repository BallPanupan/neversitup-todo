import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react"

const handler = NextAuth({

	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: "Username", type: "text"},
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				console.log('payload: ', JSON.stringify(credentials))
				const res = await fetch("https://candidate-assignment.neversitup.com/auth/login", {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				})
				const user = await res.json()
				
				if (res.ok && user) {
					console.log('router user', user)
					return {...user, name: user.username}
				}
				return null
			}
		})
	],
	pages: {
		signIn: '/auth/signin',
		signOut: '/',
		// signOut: '/auth/signout',
	}

})

export { handler as GET, handler as POST }