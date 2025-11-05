import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { IoMdMenu, IoMdClose, IoIosLogOut } from "react-icons/io";
import { GiMuscleUp } from "react-icons/gi";

export default function Index(aluno: any) {
	const [navbar, setNavbar] = useState(false);
	const activeClassName = "text-orange-600";
	const NoaActiveClassName = "text-orange-white";

	return (
		<nav className=' w-full md:w-full rounded-md  mx-auto  bg-white/30 mb-4 print:hidden'>
			<div className='justify-between  pl-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 '>
						<NavLink to='/' className='flex items-center'>
							<img
								src='/logo_preto.svg'
								className='mr-2 h-8 md:h-10'
								alt='Quattor Logo'
							/>
						</NavLink>
						{aluno.aluno?.idMember && (
							<>
								<div className='flex items-center space-x-1 md:ml-14'>
									<img
										src={
											aluno.aluno.photoUrl ? aluno.aluno.photoUrl : `/user.png`
										}
										alt='avatar'
										className='h-9 w-9 mr-2 md:w-12 md:h-12 rounded-full shadow-md '
									/>
									<div>{aluno.aluno.firstName.substring(0, 9)}</div>
								</div>
								<NavLink to='/logout'>
									<IoIosLogOut className=' ml-4 w-6 h-6' />
								</NavLink>
							</>
						)}
						{!aluno.aluno?.idMember && (
							<div className=' border items-center space-x-2  bg-orange-400 shadow rounded-xl   p-2 flex md:hidden '>
								<div>
									<GiMuscleUp className='text-white' />
									{/* <img
										src='/assets/avatarlauno.png'
										alt='logo'
										className='w-5'
									/> */}
								</div>
								{/* <div className='text-sm  text-white '>
									<NavLink
										to='/login'
										prefetch='render'
										onClick={() => setNavbar(!navbar)}
										className={({ isActive }) =>
											isActive ? activeClassName : NoaActiveClassName
										}>
										ALUNO
									</NavLink>
								</div> */}
							</div>
						)}

						<div className='md:hidden'>
							<button
								className='p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
								onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<IoMdClose className='w-8 h-8' />
								) : (
									<IoMdMenu className='w-8 h-8' />
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? "block" : "hidden"
						}`}>
						<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							<li className='font-semibold text-gray-600 hover:text-blue-600'>
								<NavLink
									onClick={() => setNavbar(!navbar)}
									to='/'
									className={({ isActive }) =>
										isActive ? activeClassName : NoaActiveClassName
									}>
									HOME
								</NavLink>
							</li>
							{aluno.aluno?.idMember && (
								<li className='font-semibold text-gray-600 hover:text-blue-600'>
									<NavLink
										to='/aluno'
										prefetch='render'
										onClick={() => setNavbar(!navbar)}
										className={({ isActive }) =>
											isActive ? activeClassName : NoaActiveClassName
										}>
										TREINOS
									</NavLink>
								</li>
							)}
							{aluno.aluno?.idMember && (
								<li className='font-semibold text-gray-600 hover:text-blue-600'>
									<NavLink
										to='/especial'
										prefetch='render'
										onClick={() => setNavbar(!navbar)}
										className={({ isActive }) =>
											isActive ? activeClassName : NoaActiveClassName
										}>
										ESPECIAIS
									</NavLink>
								</li>
							)}

							{/* <li className='font-semibold text-gray-600 hover:text-blue-600'>
								<NavLink
									to='/login'
									prefetch='render'
									onClick={() => setNavbar(!navbar)}
									className={({ isActive }) =>
										isActive ? activeClassName : NoaActiveClassName
									}>
									ALUNO
								</NavLink>
							</li> */}
							<li className=' md:hidden font-semibold text-gray-600 hover:text-blue-600'>
								<NavLink
									to='/spinning'
									onClick={() => setNavbar(!navbar)}
									className={({ isActive }) =>
										isActive ? activeClassName : NoaActiveClassName
									}>
									SPINNING
								</NavLink>
							</li>

							{aluno.aluno?.idMember === 4 && (
								<li className='font-semibold text-gray-600 hover:text-blue-600'>
									<NavLink
										to='/aluno/planejamento'
										onClick={() => setNavbar(!navbar)}
										className={({ isActive }) =>
											isActive ? activeClassName : NoaActiveClassName
										}>
										PLANEJAMENTO
									</NavLink>
								</li>
							)}
							{aluno.aluno?.idMember === 17841 && (
								<>
									<li className='font-semibold text-gray-600 hover:text-blue-600'>
										<NavLink
											to='/cadastro'
											onClick={() => setNavbar(!navbar)}
											className={({ isActive }) =>
												isActive ? activeClassName : NoaActiveClassName
											}>
											CADASTRO
										</NavLink>
									</li>
									<li className='font-semibold text-gray-600 hover:text-blue-600'>
										<NavLink
											to='/cadaulas'
											onClick={() => setNavbar(!navbar)}
											className={({ isActive }) =>
												isActive ? activeClassName : NoaActiveClassName
											}>
											AULAS
										</NavLink>
									</li>
									<li className='font-semibold text-gray-600 hover:text-blue-600'>
										<NavLink
											to='/treinos'
											onClick={() => setNavbar(!navbar)}
											className={({ isActive }) =>
												isActive ? activeClassName : NoaActiveClassName
											}>
											LISTA
										</NavLink>
									</li>
									<li className='font-semibold text-gray-600 hover:text-blue-600'>
										<NavLink
											to='/bancotreino'
											onClick={() => setNavbar(!navbar)}
											className={({ isActive }) =>
												isActive ? activeClassName : NoaActiveClassName
											}>
											MONTAGEM
										</NavLink>
									</li>
									<li className='font-semibold text-gray-600 hover:text-blue-600'>
										<NavLink
											to='/aluno/grupo'
											onClick={() => setNavbar(!navbar)}
											className={({ isActive }) =>
												isActive ? activeClassName : NoaActiveClassName
											}>
											GRUPOS
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
