import RegisterForm from '@/components/Register/Register';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const getServerSideProps = (async (context) => {

  const accessToken = context.req.cookies.accessToken || null;
  if (accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } 

  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: any = await res.json()
  // Pass data to the page via props
  return { 
    props: { 
      repo, 
      accessToken
     },
  }
}) satisfies GetServerSideProps<{ repo: any }>
 
export default function Page({
  repo,
  accessToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <main>
      <h1>Register</h1>
      <RegisterForm />
    </main>
  )
}