import { ClientComp } from "@/components/ClientComp/ClientComp";
import { cookies } from "next/headers";

export default async function Page() {

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    redirect: "follow"
  })

  const result = await response.json()

  return <ClientComp data={result} />;
}
