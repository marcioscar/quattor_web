import { FaSearch } from "react-icons/fa";

import { useState } from "react";

export default function Aulas(props: any) {
	const { aulas } = props;
	const now = new Date();

	var horaCerta = "";
	if (now.getHours() < 10) {
		horaCerta = "0" + now.getHours();
	}
	if (now.getHours() >= 10) {
		horaCerta = now.getHours();
	}

	const hourFilter = aulas.filter(
		(classes: any) =>
			classes.start >= horaCerta.toString() &&
			classes.days.includes(now.getDay())
	);

	const [procuraAula, setProcuraAula] = useState("");

	const filtrada = aulas.filter((aulas: any) =>
		aulas.turma.toLowerCase().includes(procuraAula.toLowerCase())
	);

	return (
		<>
			<div className='flex justify-center flex-wrap mt-2'>
				<div className=' w-full   '>
					{/* <div className="p-2 w-full md:w-3/4  "> */}
					<div className='  text-stone-800 text-center'>PRÓXIMAS AULAS</div>

					<div className='overflow-x-auto relative'>
						<div className='p-2 w-full '>
							<div className='mt-2 mb-2  text-orange-400 text-center'>
								<div className='relative  '>
									<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
										<FaSearch />
									</div>

									<input
										type='search'
										id='search'
										value={procuraAula}
										onChange={(e) => setProcuraAula(e.target.value)}
										placeholder='Procurar Aulas'
										className='block p-1  pl-10 w-full text-sm text-stone-900 bg-stone-50 rounded-lg border border-stone-300  '
									/>
								</div>
							</div>
							{procuraAula.length > 0 && (
								// <div className="overflow-x-auto relative">
								<div>
									<table className='w-full  text-sm text-left text-stone-500 dark:text-stone-400'>
										<thead className='text-xs  text-stone-700 uppercase bg-white/30  dark:bg-gray-700 dark:text-gray-400'>
											<tr className='rounded-lg'>
												<th scope='col' className=' px-6 py-2 '>
													Aulas
												</th>
												<th scope='col' className='  px-6 py-2'>
													Horário
												</th>
												<th scope='col' className=' '>
													Dias
												</th>
											</tr>
										</thead>
										<tbody>
											{filtrada.map((aula: any) => (
												<tr key={aula.id} className=' dark:bg-gray-800'>
													<th
														scope='row'
														className='py-2 px-2 flex gap-x-2 items-center font-medium text-stone-900 whitespace-nowrap dark:text-white'>
														{/* <img
                              className="avatar h-6 w-6 rounded-full "
                              src={aula.icon}
                              alt={aula.turma}
                            /> */}
														{aula.turma}
													</th>
													<td className='py-2 px-6'>{aula.start}</td>

													<td className='py-2 font-mono text-stone-500 '>
														{aula.days.map((m: any) => {
															if (m == 1) {
																return "SEG ";
															}
															if (m == 2) {
																return "TER ";
															}
															if (m == 3) {
																return "QUA  ";
															}
															if (m == 4) {
																return "QUI ";
															}
															if (m == 5) {
																return "SEX ";
															}
															if (m == 6) {
																return "SAB ";
															} else {
																return "DOM";
															}
														})}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
						{procuraAula.length == 0 && (
							<table className='w-full  text-sm text-left text-stone-600 dark:text-gray-400'>
								<thead className='text-xs  text-stone-700 uppercase bg-white/30  dark:bg-gray-700 dark:text-gray-400'>
									<tr className='rounded-lg'>
										<th scope='col' className='px-6 py-2 '>
											Aulas
										</th>
										<th scope='col' className='py-2'>
											Horário
										</th>
									</tr>
								</thead>
								<tbody>
									{hourFilter.map((aula: any) => (
										<tr key={aula.id} className=' dark:bg-gray-800'>
											<th
												scope='row'
												className='py-2 px-6 flex gap-x-2 items-center font-medium text-stone-900 whitespace-nowrap dark:text-white'>
												{/* <img
                          className="avatar h-6 w-6  rounded-full "
                          src={aula.icon}
                          alt={aula.turma}
                        /> */}
												{aula.turma}
											</th>
											<td className='py-2 text-xs md:text-base  '>
												{aula.start} - {aula.finish}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
