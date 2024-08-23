"use client";

import { createCookie } from "@/app/actions";
import { useEffect, useState } from "react";

export const ClientComp =  ({ data, token }: any) => {

  const [originalToken, setOriginalToken] = useState(token);

  if(originalToken){
    createCookie(originalToken);
    setOriginalToken(null);
  }
  
	const [localStorageValue, setLocalStorageValue] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage on the client-side
    const storedValue = localStorage.getItem('someKey');
    setLocalStorageValue(storedValue);
  }, []);


	const date = new Date();
  date.setTime(date.getTime() * 24 * 60 * 60 * 1000); // Set expiration


  return <div>{JSON.stringify(data)}</div>;
};
