'use client';
import { useRouter } from 'next/navigation';

export default function ButtonDetailUser({ id }) {
	const router = useRouter();
	return (
		<>
			<button
				className='px-0.5 bg-purple-700 rounded rounded-b shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40'
				onClick={() => {
					router.push(`/users/${id}`);
				}}
			>
				Ver detalles
			</button>
		</>
	);
}
