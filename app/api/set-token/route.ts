import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const accessToken: any = await request.json();

  const cookieOptions: any = {
    httpOnly: true,
    path: '/',
  };

  const response = NextResponse.json({ message: 'Token saved in cookie' });
  response.cookies.set('accessToken', 'accessToken-xxxxx-1', cookieOptions);

  return response;
}
