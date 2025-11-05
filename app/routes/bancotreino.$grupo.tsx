import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";
import { getExercicios, updateTreino } from "~/utils/treinos.server";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

export const loader: LoaderFunction = async ({ request, params }) => {
	const exercicio = await getExercicios(params.grupo);

	return exercicio;
};
export const action: ActionFunction = async ({ request, params }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);

	// await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video);
	const treinos = await updateTreino(values);
	// return treinos;

	return redirect(`${treinos.id}`);
};

export default function Grupocadastrado() {
	const { exercicios } = useLoaderData<typeof loader>();

	const [semana, setSemana] = useState("");
	const [grupo, setGrupo] = useState("");
	return (
		<>
			<div className='flex'>
				<select
					onChange={(event) => setSemana(event.target.value)}
					id='semana'
					name='semana'
					className='rounded-md col-span-2 border-2 form-control block
                          w-full '>
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
				</select>
				<select
					onChange={(event) => setGrupo(event.target.value)}
					id='grupo'
					name='grupo'
					className='rounded-md border-2 form-control block
                          w-full col-span-2 bg-transparent  '>
					<option value=''>Selecione o grupo</option>
					<option value='PEITORAL'>PEITORAL</option>
					<option value='OMBROS'>OMBROS</option>
					<option value='MEMBROS SUPERIORES 1'>MEMBROS SUPERIORES 1</option>
					<option value='COSTAS'>COSTAS</option>
					<option value='MEMBROS SUPERIORES 2'>MEMBROS SUPERIORES 2</option>
					<option value='BICEPS'>BICEPS</option>
					<option value='TRICEPS'>TRICEPS</option>
					<option value='QUADS'>QUADS</option>
					<option value='POSTERIORES DE COXAS'>POSTERIORES DE COXAS</option>
					<option value='GLUTEOS'>GLUTEOS</option>
					<option value='PANTURRILHA'>PANTURRILHA</option>
					<option value='ABDOME'>ABDOME</option>
					<option value='MEMBROS INFERIORES GERAL'>
						MEMBROS INFERIORES GERAL
					</option>
					<option value='MEMBROS SUPERIORES GERAL'>
						MEMBROS SUPERIORES GERAL
					</option>
					<option value='INICIANTE 1'>INICIANTE 1</option>
					<option value='INICIANTE 2'>INICIANTE 2</option>
					<option value='INICIANTE 3'>INICIANTE 3</option>
					<option value='INICIANTE 4'>INICIANTE 4</option>
				</select>
			</div>
			<ul>
				<div className='grid grid-cols-12 py-2 gap-2'>
					<div className='col-span-3 font-light text-sm text-sky-500'>
						Número
					</div>
					<div className='col-span-8 font-light text-sm text-sky-500'>Nome</div>
				</div>
				{exercicios.map((exec: any, index: any) => (
					<li key={exec.execid} className='py-1  '>
						<Form method='post'>
							<input
								type='text'
								defaultValue={semana}
								hidden
								name='semana'
								id='semana'
							/>
							<input
								type='text'
								defaultValue={grupo}
								hidden
								name='grupo'
								id='grupo'
							/>
							<div className='grid grid-cols-12  gap-2'>
								<input
									className='col-span-2 bg-transparent'
									type='text'
									id='index'
									readOnly
									disabled
									defaultValue={index + 1}
								/>
								<input
									hidden
									type='text'
									id='execid'
									name='execid'
									defaultValue={exec.execid}
								/>

								<input
									type='text'
									id='nome'
									name='nome'
									readOnly
									defaultValue={exec.nome}
									className='col-span-5 bg-transparent  '
								/>

								<input
									type='text'
									id='carga'
									name='carga'
									hidden
									defaultValue={exec.carga}
									className='col-span-2 bg-stone-50 border-b-2 '
								/>

								<input
									type='text'
									id='repeticoes'
									name='repeticoes'
									hidden
									defaultValue={exec.Repeticoes}
									className='col-span-2 bg-stone-50 border-b-2'
								/>

								<input
									type='text'
									id='obs'
									name='obs'
									hidden
									defaultValue={exec.obs}
									className='col-span-3 text-sm bg-stone-50 border-b-2'
								/>
								<input
									type='text'
									id='video'
									name='video'
									hidden
									defaultValue={exec.video}
									className='col-span-3 text-sm bg-stone-50 border-b-2'
								/>

								<div className='grid justify-items-center grid-cols-1 gap2'>
									<button
										className='flex content-center text-green-500 bg-stone-100 '
										type='submit'
										name='_action'
										value='save'>
										<FaSave />
									</button>
								</div>
							</div>
						</Form>
					</li>
				))}
			</ul>

			<div className='text-center  font-semibold text-red-600 mt-6'>
				{grupo + "  "} {semana}
			</div>
			<Outlet />
		</>
	);
}
