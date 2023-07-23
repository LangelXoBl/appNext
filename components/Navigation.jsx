import Link from 'next/link';

export default function Navigation() {
	return (
		<>
			<nav className='mb-6 bg-transparent p-4 shadow-md'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					{/* Logotipo */}
					<Link href='/' className='text-white text-xl font-bold'>
						Mi App
					</Link>

					{/* Enlaces de navegación */}
					<ul className='hidden md:flex space-x-4'>
						<li>
							<Link href='/users' className='text-white hover:underline'>
								usuarios
							</Link>
						</li>
						<li>
							<Link href='/services' className='text-white hover:underline'>
								Servicios
							</Link>
						</li>
						<li>
							<Link href='/about' className='text-white hover:underline'>
								Conocenos
							</Link>
						</li>
					</ul>

					{/* Botón de inicio de sesión */}
					<button className='bg-white text-blue-500 px-4 py-2 rounded-md hidden md:block'>
						Iniciar sesión
					</button>
				</div>
			</nav>
		</>
	);
}
