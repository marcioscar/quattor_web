import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getTreinos } from "~/utils/treinos.server";
import { getWeek } from "date-fns";
import { useFetcher, useLoaderData, Outlet, Link } from "@remix-run/react";
import { FaListAlt, FaPrint } from "react-icons/fa";

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);

	const par = url.searchParams.get("semana_query");
	const parametro = par ? parseInt(par) : getWeek(new Date());
	// const treinos = await getTreinos(getWeek(new Date()));
	const treinos = await getTreinos(parametro);

	return json({ treinos });
};

export default function Treino() {
	const semana = useFetcher();
	const { treinos } = useLoaderData<typeof loader>();
	const treinoSemana = semana.data?.treinos ? semana.data.treinos : treinos;
	return (
		<div className='w-full bg-stone-100 font-Roboto '>
			<div className='flex items-center flex-col space-x-4'>
				<h2 className='text-2xl font-extrabold text-slate-700'>
					Lista de Treinos
				</h2>

				<semana.Form method='get' action='.'>
					<select
						name='semana_query'
						onChange={(event) => semana.submit(event.target.form)}
						className='rounded-md border-2 form-control block'>
						<option value='01'>01 - (29/12 a 04/01)</option>
						<option value='02'>02 - (05/01 a 11/01)</option>
						<option value='03'>03 - (12/01 a 18/01)</option>
						<option value='04'>04 - (19/01 a 25/01)</option>
						<option value='05'>05 - (26/01 a 01/02)</option>
						<option value='06'>06 - (02/02 a 08/02)</option>
						<option value='07'>07 - (09/02 a 15/02)</option>
						<option value='08'>08 - (16/02 a 22/02)</option>
						<option value='09'>09 - (23/02 a 01/03)</option>
						<option value='10'>10 - (02/03 a 08/03)</option>
						<option value='11'>11 - (09/03 a 15/03)</option>
						<option value='12'>12 - (16/03 a 22/03)</option>
						<option value='13'>13 - (23/03 a 29/03)</option>
						<option value='14'>14 - (30/03 a 05/04)</option>
						<option value='15'>15 - (06/04 a 12/04)</option>
						<option value='16'>16 - (13/04 a 19/04)</option>
						<option value='17'>17 - (20/04 a 26/04)</option>
						<option value='18'>18 - (27/04 a 03/05)</option>
						<option value='19'>19 - (04/05 a 10/05)</option>
						<option value='20'>20 - (11/05 a 17/05)</option>
						<option value='21'>21 - (18/05 a 24/05)</option>
						<option value='22'>22 - (25/05 a 31/05)</option>
						<option value='23'>23 - (01/06 a 07/06)</option>
						<option value='24'>24 - (08/06 a 14/06)</option>
						<option value='25'>25 - (15/06 a 21/06)</option>
						<option value='26'>26 - (22/06 a 28/06)</option>
						<option value='27'>27 - (29/06 a 05/07)</option>
						<option value='28'>28 - (06/07 a 12/07)</option>
						<option value='29'>29 - (13/07 a 19/07)</option>
						<option value='30'>30 - (20/07 a 26/07)</option>
						<option value='31'>31 - (27/07 a 02/08)</option>
						<option value='32'>32 - (03/08 a 09/08)</option>
						<option value='33'>33 - (10/08 a 16/08)</option>
						<option value='34'>34 - (17/08 a 23/08)</option>
						<option value='35'>35 - (24/08 a 30/08)</option>
						<option value='36'>36 - (31/09 a 06/09)</option>
						<option value='37'>37 - (07/09 a 13/09)</option>
						<option value='38'>38 - (14/09 a 20/08)</option>
						<option value='39'>39 - (21/09 a 27/08)</option>
						<option value='40'>40 - (28/09 a 04/10)</option>
						<option value='41'>41 - (05/10 a 11/10)</option>
						<option value='42'>42 - (12/10 a 18/10)</option>
						<option value='43'>43 - (19/10 a 25/10)</option>
						<option value='44'>44 - (26/10 a 01/11)</option>
						<option value='45'>45 - (02/11 a 08/11)</option>
						<option value='46'>46 - (09/11 a 15/11)</option>
						<option value='47'>47 - (16/11 a 22/11)</option>
						<option value='48'>48 - (23/11 a 29/11)</option>
						<option value='49'>49 - (03/11 a 06/12)</option>
						<option value='50'>50 - (07/12 a 13/12)</option>
						<option value='51'>51 - (14/12 a 20/12)</option>
						<option value='52'>52 - (21/12 a 27/12)</option>
						<option value='53'>53 - (28/12 a 03/01)</option>
						<option value='413'>semana 3 - (Ciclo 4)</option>
						<option value='414'>semana 4 - (Ciclo 4)</option>
						<option value='415'>semana 5 - (Ciclo 4)</option>
						<option value='416'>semana 6 - (Ciclo 4)</option>
					</select>
				</semana.Form>
			</div>
			<div className='container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3'>
				<div className='overflow-x-auto relative'>
					<table className='w-full  text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
							<tr className='rounded-lg'>
								<th scope='col' className=' '>
									Grupo
								</th>
								<th scope='col' className='text-center '>
									Semana
								</th>

								{/* <th className="text-right px-2 text-green-600 text-lg ">
                  <FaTasks />
                </th> */}
							</tr>
						</thead>
						<tbody>
							{treinoSemana.map((treino: any) => (
								<tr key={treino.id} className=' dark:bg-gray-800'>
									<th className='py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										{treino.grupo}
									</th>
									<td className=' text-center'>{treino.semana}</td>
									<td className='  '>
										<Link to={`${treino.id}`} className='text-sky-600 text-lg '>
											{/* Exercícios */}
											<FaListAlt />
										</Link>
									</td>
									<td className='  '>
										<Link
											to={`/print/${treino.id}`}
											className='text-orange-400 text-lg '>
											<FaPrint />
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='col-span-2'>
					<h2 className=' font-semibold text-center text-slate-700'>
						Lista de Exercícios
					</h2>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
