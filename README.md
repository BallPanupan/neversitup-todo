# The Testing of Frontend

The project is built on Nextjs 14 and supports server-side rendering (SSR) and server components.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About Features

- server-side rendering (SSR)
- member

  - SignIn with username and password (authentication system)

- about Todo task
  - Get all of todo Task
  - Create new todo Task
  - Edit
  - Delete
  - Update

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v18.19.0 or later)
- npm (v9.6.0 or later) or yarn (v1.22.0 or later)

## .env file

```bash
NEXTAUTH_SECRET=my_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=https://candidate-assignment.neversitup.com
```

## URL rewriting proxy

Configure in `next.config.mjs`

```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/service/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ];
  },
};
```
