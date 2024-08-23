'use server'
 
import { cookies } from 'next/headers'
 
export async function createCookie(token: any) {
  cookies().set('name', 'lee')
  // // or
  // cookies().set('name', 'lee', { secure: true })
  // // or
  cookies().set({
    name: 'accessToken',
    value: token,
    httpOnly: true,
    path: '/',
  })


}