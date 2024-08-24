"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LogoutButton() {
	const router = useRouter();
	const handleLogout = async (event: React.FormEvent) => {
		event.preventDefault();
		const response = await fetch('/api/clear-token', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: "follow"
		})
		if (response.ok) {
			router.push('/');
		}
		return true
	};

	return (
		<button className='mt-1' onClick={handleLogout}>LogOut</button>
	)
}
