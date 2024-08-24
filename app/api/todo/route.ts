import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const url  = new URL(request.url);
    const id   = url.pathname.split('/')[3];
    const data = await request.json();
		const token = cookies().get('accessToken')?.value || ''
    const raw = JSON.stringify({
      title: data.title,
      description: data.description,
    });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: raw,
      redirect: "follow"
    })
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error PATCH request:', error);
    return NextResponse.json({ error: 'Patch todo task' }, { status: 500 });
  }
}