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


## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t neversitup-todo .`.
1. Run your container: `docker run -p 3000:3000 neversitup-todo`.

You can view your images created with `docker images`.

### In existing projects

To add support for Docker to an existing project, just copy the [`Dockerfile`](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
```

This will build the project as a standalone app inside the Docker image.