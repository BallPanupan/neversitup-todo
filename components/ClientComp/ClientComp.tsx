"use client";

// import { createCookie } from "@/app/actions";
import { useEffect, useState } from "react";

export const ClientComp =  ({ data, token, logToken}: any) => {
  // keep accessToken on Cookie 
  // const [originalToken, setOriginalToken] = useState(token);
  // if(originalToken){
  //   createCookie(originalToken);
  //   setOriginalToken(null);
  // }

  useEffect(() => {
    const saveTokenInCookie = async () => {
      if (token) {
        // Call API route to save token in cookie
        await fetch('/api/set-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken: token }),
        });
      }
    };

    saveTokenInCookie();
  }, [token]);

  
	const [localStorageValue, setLocalStorageValue] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage on the client-side
    const storedValue = localStorage.getItem('someKey');
    setLocalStorageValue(storedValue);
  }, []);


	const date = new Date();
  date.setTime(date.getTime() * 24 * 60 * 60 * 1000); // Set expiration

  console.log({logToken})

  return <div>{JSON.stringify(data)}</div>;
};
