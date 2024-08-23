import { ClientComp } from "@/components/ClientComp/ClientComp";
import { cookies } from "next/headers";

export default async function Page() {

  const cookieStore = cookies();
  const logToken = cookieStore.get('accessToken')?.value;

  const accessToken = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`, {
  //   method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${accessToken}`
  //   },
  //   redirect: "follow"
  // })

  // const result = await response.json()  

  const result: any = []
  


  return <ClientComp data={result} token={accessToken} logToken={logToken}/>;
}
