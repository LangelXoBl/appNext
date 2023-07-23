import Image from 'next/image';

//components
import ListUsers from '@/components/ListUsers';

async function fetchUsers() {
	const res = await fetch('https://reqres.in/api/users?page=1&per_page=12');
	const json = await res.json();
	return json.data;
}

async function Home() {
	const users = await fetchUsers();
	console.log(users);
	return (
		<>
			<ListUsers users={users} />
		</>
	);
}
export default Home;
