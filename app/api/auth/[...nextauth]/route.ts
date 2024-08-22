import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: "Username", type: "text"},
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				const res = await fetch("https://candidate-assignment.neversitup.com/auth/login", {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				})
				const user = await res.json()

				if (res.ok && user) {
          return user
        }
				return null
			},
		})
	],
	callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      session.user = token;
      return session;
    },
  },
	pages: {
		signIn: '/auth/signin',
		signOut: '/',
		// signOut: '/auth/signout',
	}

})

export { handler as GET, handler as POST }