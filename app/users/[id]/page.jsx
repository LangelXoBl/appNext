//"use client"
//import { useParams } from "next/navigation"
/**
 * Funcion para traer los detalles de usuario desde el server
 * @returns user
 */
async function getUserDetail(id) {
	const res = await fetch(`https://reqres.in/api/users/${id}`);
	const json = await res.json();
	return json.data;
}

// Para obtener los params desde el server se recibe como prop
export default async function UserDetail({ params }) {
	// obtener id desde el front se usa el hook
	//const params = useParams()
	console.log(params);

	const data = await getUserDetail(params.id);
	console.log(data);
	return (
		<div>
			<img src={data.avatar} alt='avatar' />
			<h1>{data.first_name + data.last_name}</h1>
			<h3>{data.email}</h3>
		</div>
	);
}
