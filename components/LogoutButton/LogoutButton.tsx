"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LogoutButton() {
	const router = useRouter();
	const handleLogout = async () => {
		const response = await fetch('/api/clear-token', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: "follow"
		})
		if (response.ok) {
			window.location.replace("/");
		}
		return true
	};

	return (
		<button className='mt-1' onClick={handleLogout}>LogOut</button>
	)
}
