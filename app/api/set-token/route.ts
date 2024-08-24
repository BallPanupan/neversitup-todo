import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: any = await request.json();

  const cookieOptions: any = {
    httpOnly: true,
    path: '/',
  };

  const response = NextResponse.json({ message: 'Token saved in cookie' });
  response.cookies.set('accessToken', data.accessToken, cookieOptions);
  response.cookies.set('name', data.username, cookieOptions);

  return response;
}
