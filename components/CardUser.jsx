import ButtonDetailUser from '@/components/ButtonDetailUser';

export default function ListUsers({ user }) {
	return (
		<>
			<article className='mb-5 p-4 m-2 bg-slate-900 border border-cyan-400 rounded-lg shadow-xl shadow-cyan-500/50'>
				{/* Contenido del artículo */}
				<div className='flex flex-col md:flex-row items-center'>
					{/* Imagen de perfil */}
					<img
						src={user.avatar}
						alt='avatar'
						className='rounded-full mb-3 md:mb-0 md:mr-4 md:w-32 md:h-32'
					/>

					{/* Información del usuario */}
					<div className='text-center md:text-left'>
						<h3 className='mb-1 text-xl font-bold'>{user.first_name}</h3>
						<p className='mb-2'>{user.email}</p>
						<ButtonDetailUser id={user.id} />
					</div>
				</div>
			</article>
		</>
	);
}
