import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: any = await request.json();

  const cookieOptions: any = {
    httpOnly: true,
    path: '/',
  };

  const response = NextResponse.json({ message: 'Token saved in cookie' });
  // response.cookies.set('accessToken', data.accessToken, cookieOptions);
  // response.cookies.set('username', data.username, cookieOptions);

  cookies().set('accessToken', data.accessToken, cookieOptions)
  cookies().set('username', data.username, cookieOptions)

  return response;
}
