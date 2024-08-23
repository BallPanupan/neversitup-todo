"use client";

import { useEffect, useState } from "react";

export const ClientComp = ({ data }: any) => {

	const [localStorageValue, setLocalStorageValue] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage on the client-side
    const storedValue = localStorage.getItem('someKey');
    setLocalStorageValue(storedValue);
  }, []);


	const date = new Date();
  date.setTime(date.getTime() * 24 * 60 * 60 * 1000); // Set expiration
  document.cookie = `accessTokenxxx=${'token'}; expires=${date.toUTCString()}; path=/`;


	document.cookie = `111111=${'token'}; expires=${date.toUTCString()}; path=/`;


  return <div>{JSON.stringify(data)}</div>;
};
