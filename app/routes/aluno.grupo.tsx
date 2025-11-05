import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
	deleteAluno,
	getAluno,
	getGrupos,
	getSale,
	getTurmas,
} from "@/utils/aluno.server";
import { Button } from "@/components/ui/button";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import type { ActionArgs } from "@remix-run/node";
import { Separator } from "@/components/ui/separator";

export const loader: LoaderFunction = async ({ request, params }) => {
	const grupos = await getGrupos();
	const sale = await getSale("19860");
	const turma = await getTurmas();
	console.log(turma);
	console.log(sale.pop().ammount);
	console.log(sale);

	return json(grupos);
};

export async function action({ request }: ActionArgs) {
	const formData = await request.formData();
	let values = Object.fromEntries(formData);
	await deleteAluno(values);
	return redirect(``);
}
export default function Grupo() {
	const grupos = useLoaderData();
	return (
		<>
			<div className=' text-center font-semibold text-lg  m-4'>
				Grupos projetos especiais
			</div>

			<div className='flex items-center gap-2 mb-2  place-content-center '>
				<Link to='novo'>
					<Button variant='secondary' className='bg-stone-200 flex  '>
						Novo Grupo
					</Button>
				</Link>
				<Link to='cadaluno'>
					<Button variant='secondary' className='bg-blue-500 text-white flex  '>
						Novo Aluno
					</Button>
				</Link>
			</div>

			<div className=' container grid gap-3 grid-cols-1 md:grid-cols-3'>
				{grupos.map((g: any, index: any) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className=' mb-3 font-normal items-center place-content-between flex '>
								<div className='flex items-center '>
									<Link to={g.id}>
										<AiTwotoneEdit className='w-6 h-6 flex mr-2 rounded-full p-1 bg-teal-500  text-white' />
									</Link>
									{g.nome}
								</div>
								<div>
									<Separator orientation='vertical' />
								</div>
								<div className='flex gap-2'>
									Membros - {g.alunos.length} / {g.numero}
								</div>
							</CardTitle>
							{g.alunos.map((a: any, index: any) => (
								<Form method='post' key={a.id}>
									<input
										type='text'
										hidden
										name='idMember'
										defaultValue={a.idMember}
									/>
									<input type='text' hidden name='id' defaultValue={g.id} />
									<CardDescription>
										<div className='flex items-center place-content-between'>
											{/* <div className="relative">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={a.photo}
                          alt="avatar"
                        />
                        <span className="top-0 left-7 absolute  w-5 h-5 bg-green-400  dark:border-gray-800 rounded-full">
                          <div className=" text-center text-white font-semibold mb-1">
                            3
                          </div>
                        </span>
                      </div> */}
											<div className=''>{index + 1 + " - " + a.nome}</div>
											<button type='submit'>
												<TiDelete className='text-orange-400 w-6 h-6' />
											</button>
										</div>
									</CardDescription>
								</Form>
							))}
						</CardHeader>
					</Card>
				))}
			</div>

			<Outlet />
		</>
	);
}
