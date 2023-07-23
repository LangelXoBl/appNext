import CardUSer from '@/components/CardUser';

export default function CardUser({ users }) {
	return (
		<div className='grid grid-cols-3 gap-4 px-12'>
			{users.map(user => {
				return <CardUSer key={user.id} user={user} />;
			})}
		</div>
	);
}
