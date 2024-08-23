import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const accessToken: any = await request.json();

  const cookieOptions: any = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  };

  const response = NextResponse.json({ message: 'Token saved in cookie' });
  response.cookies.set('accessToken', 'accessToken-xxxxx-1', cookieOptions);

  return response;
}
