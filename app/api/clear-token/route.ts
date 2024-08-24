import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const response = NextResponse.json({ message: 'Clear Token in cookie' });
  // response.cookies.delete('accessToken');
  // response.cookies.delete('username');
  cookies().delete('accessToken')
  cookies().delete('username')

  return response;
}
