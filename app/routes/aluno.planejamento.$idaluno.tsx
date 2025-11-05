import {
	deleteTreinoPlanejadoNumero,
	getAluno,
	getHistorico,
	updateFicha,
} from "@/utils/aluno.server";
import {
	json,
	redirect,
	type LoaderFunction,
	type ActionFunction,
} from "@remix-run/node";
import {
	Form,
	Link,
	Outlet,
	useLoaderData,
	useNavigation,
} from "@remix-run/react";
import _ from "lodash";
import { AiFillDelete } from "react-icons/ai";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const loader: LoaderFunction = async ({ request, params }) => {
	const alunoa = await getAluno(Number(params.idaluno));
	const aluno = alunoa[0];

	const historico = await getHistorico(Number(params.idaluno));
	// console.log(historico);
	return json({ aluno, historico });
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	const _action = form.get("_action");
	if (_action === "delete") {
		await deleteTreinoPlanejadoNumero(values);
		console.log(values);
	}
	if (_action === "salvar") {
		await updateFicha(values);
	}

	return redirect(`.`);
};

export default function Idaluno() {
	const { aluno, historico }: any = useLoaderData();
	const ultimosTreinos = _.takeRight(historico?.treinos, 3);
	const planejadosOrdenado = _.sortBy(historico?.planejados, ["title"]);
	console.log(planejadosOrdenado);
	const transition = useNavigation();

	// const PlaneTreino = _.mapValues(
	//   _.orderBy(historico.planejados, ["data", "asc"]),
	//   function (o) {
	//     const dt = o.data;
	//     const data = format(new Date(o.data), "EEEEEE - dd/MM", {
	//       locale: ptBR,
	//     });
	//     return { treino: o.treinoP, data, dt };
	//   }
	// );

	// const PlaneTreino = _.mapValues(
	//   _.orderBy(historico?.planejados, ["data", "asc"]),
	//   function (o) {
	//     const dt = o.data;
	//     const feito = o.feito;
	//     const data = format(new Date(o.data), "EEEEEE - dd/MM", {
	//       locale: ptBR,
	//     });
	//     return { treino: o.treinoP, data, dt, feito };
	//   }
	// );

	const PlaneTreino = _.mapValues(historico?.planejados, function (o) {
		return { treino: o.treinoP, dia: o.dia, id: o.id };
	});

	const plano = _.map(PlaneTreino, (treino: any) => {
		return treino;
	});

	// const grupotreino = _.map(
	//   _.groupBy(PlaneTreino, "data"),
	//   (data, idx, teste) => {
	//     return { data: idx, treino: data, dt: teste };
	//   }
	// );
	const hitTreino = _.mapValues(historico?.treinos, function (o) {
		const data = format(new Date(o.data), "EEEEEE - dd/MM", {
			locale: ptBR,
		});
		return { treino: o.treino, data };
	});
	const grupotreinoFeito = _.map(_.groupBy(hitTreino, "data"), (data, idx) => {
		return { data: idx, treino: data };
	});

	const grupotreino = _.map(
		_.groupBy(PlaneTreino, "data"),
		(data: any, idx: any, dt: any, feito: any) => {
			return { data: idx, treino: data, dt: dt, feito: feito };
		}
	);

	const ultimos = _.takeRight(grupotreino, 7);
	console.log(historico.planejados.length);
	const ultimosFeitos = _.takeRight(grupotreinoFeito, 7);

	return (
		<div className=' container mx-auto p-3 bg-stone-50'>
			<Outlet />
			<Form method='post' className='bg-stone-50'>
				<input
					hidden
					type='number'
					name='aluno'
					readOnly
					defaultValue={aluno.idMember}
				/>
				<Card className='w-full md:w-11/12 mt-2 mx-auto   '>
					<CardContent className='grid grid-cols-1 gap-2'>
						<div className='grid grid-cols-1 items-center justify-between '>
							<div className='flex items-center space-x-2 mt-3'>
								<Avatar className='w-20 h-20'>
									<AvatarImage
										src={aluno.photoUrl ? aluno.photoUrl : `/user.png`}
									/>
									<AvatarFallback>Foto</AvatarFallback>
								</Avatar>
								<div className='space-y-2'>
									<p className=' font-medium  text-lg leading-none'>
										{aluno.firstName}
									</p>

									<p className='text-sm text-stone-400 text-muted-foreground'>
										{_.filter(aluno.memberships, {
											membershipStatus: "active",
										}).map((n) => n.name)}
									</p>
									<p>Matrícula - {aluno.idMember}</p>
								</div>
							</div>
							{/* <div className="font-medium flex justify-self-end   text-green-600"> */}
							<div
								className={
									historico?.nivel === "iniciante"
										? " bg-red-600 text-white  rounded-md font-medium flex justify-self-center md:justify-self-end"
										: historico?.nivel === "intermediario"
										? "bg-orange-500 text-white  rounded-md font-medium flex justify-self-center md:justify-self-end"
										: "bg-green-500 text-white rounded-md font-medium flex justify-self-center md:justify-self-end"
								}>
								<Select name='nivel' defaultValue={historico?.nivel}>
									<SelectTrigger className='w-[180px]'>
										<SelectValue placeholder='Nível do Aluno' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='iniciante'>Iniciante</SelectItem>
										<SelectItem value='intermediario'>Intermediário</SelectItem>
										<SelectItem value='avancado'>Avançado</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* <input
                className="font-medium text-right text-green-600 border-b p-2"
                type="text"
                name="nivel"
                defaultValue={historico?.nivel}
                placeholder="Nível"
              /> */}
						</div>
						<div className='grid grid-cols-1  '>
							<div className=''>
								<div className=''>
									<p className='font-medium text-stone-500'>Histórico</p>
									<textarea
										className=' block p-1 w-full text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										// type="text"
										name='historico'
										defaultValue={historico?.historico}
										rows={4}
									/>
								</div>
							</div>
							<div className=''>
								<p className='font-medium text-stone-500'>Patologias</p>
								<textarea
									className=' block p-1 w-full   text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									// type="text"
									name='patologias'
									defaultValue={historico?.patologias}
									rows={4}
								/>
							</div>
						</div>
						<button
							name='_action'
							value='salvar'
							// variant="secondary"
							className='bg-green-300  text-black py-2 px-1 rounded-md'>
							{transition.state === "submitting"
								? "Atualizando..."
								: "Atualizar"}
						</button>
					</CardContent>
				</Card>
			</Form>
			<div className='container'>
				<div>
					{planejadosOrdenado.length !== 0 && (
						<>
							<h2 className='   text-stone-600 rounded-md font-semibold  text-center text-lg m-4'>
								Treinos Planejados
							</h2>
							<div className='text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-1 md:gap-2 md:grid-cols-4 lg:grid-cols-4 lg:container-2xl'>
								{planejadosOrdenado.map((t: any) => (
									<Form method='post' key={t.id}>
										<Card className=' w-full min-h-full min-w-full'>
											<CardHeader>
												<div className='flex items-center space-x-2 place-content-center '>
													<CardTitle> Treino {t.title}</CardTitle>
													<input hidden name='title' readOnly value={t.title} />
													<input
														hidden
														name='aluno'
														readOnly
														value={historico.aluno}
													/>
													<div>
														<Dialog>
															<DialogTrigger asChild>
																<Button
																	size='xs'
																	variant='outline'
																	className=' border border-none shadow-none'>
																	<AiFillDelete className='h-5 w-5 text-red-500   ' />
																</Button>
															</DialogTrigger>
															<DialogContent>
																<Form method='post'>
																	<DialogHeader>
																		<DialogTitle className=' text-stone-600'>
																			Tem Certeza que quer apagar
																		</DialogTitle>
																		<Separator className='my-4' />
																		<DialogDescription className='mt-8'>
																			<div className='flex h-5 place-content-center items-center  text-orange-500 text-lg  space-x-4  font-bold'>
																				<div>Treino {t.title}</div>
																			</div>
																		</DialogDescription>
																	</DialogHeader>
																	<input
																		hidden
																		name='aluno'
																		readOnly
																		value={historico.aluno}
																	/>
																	<input
																		hidden
																		name='title'
																		readOnly
																		value={t.title}
																	/>
																	<DialogFooter>
																		<DialogClose asChild>
																			<button
																				type='submit'
																				className='rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1'
																				name='_action'
																				value='delete'>
																				Apagar
																			</button>
																		</DialogClose>
																	</DialogFooter>
																</Form>
															</DialogContent>
														</Dialog>
														{/* <AiFillDelete className='h-5 w-5 text-red-500   ' /> */}
													</div>
												</div>
												<CardDescription>
													{t.data.map((d: any, index: any) => (
														<div key={index}>{d}</div>
													))}
												</CardDescription>
											</CardHeader>
										</Card>
									</Form>
								))}
							</div>

							{/* <div className='text-stone-600 text-center place-content-center gap-2 container mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl'>
								<Card>
									<CardHeader>
										<CardTitle>Segunda</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("segunda"))
												.map((s, index) => (
													<div key={index} className=''>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='segunda'
															/>
															<Link to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Terça</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("terca"))
												.map((s, index) => (
													<div key={index} className=''>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='terca'
															/>
															<Link to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card className=''>
									<CardHeader>
										<CardTitle>Quarta</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("quarta"))
												.map((s, index) => (
													<div key={index} className=''>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='quarta'
															/>
															<Link to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card className=''>
									<CardHeader>
										<CardTitle>Quinta</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("quinta"))
												.map((s, index) => (
													<div key={index} className=''>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='quinta'
															/>
															<Link to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card className=''>
									<CardHeader>
										<CardTitle>Sexta</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("sexta"))
												.map((s, index) => (
													<div key={index}>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='sexta'
															/>
															<Link to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card className=''>
									<CardHeader>
										<CardTitle>Sábado</CardTitle>
										<CardDescription className=' '>
											{plano
												.filter((o) => o.dia?.includes("sabado"))
												.map((s, index) => (
													<div key={index}>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='sabado'
															/>
															<Link
																// className="bg-green-400 mt-3 w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2"
																to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
								<Card className=''>
									<CardHeader>
										<CardTitle>Domingo</CardTitle>
										<CardDescription>
											{plano
												.filter((o) => o.dia?.includes("domingo"))
												.map((s, index) => (
													<div key={index} className=''>
														<Form
															method='post'
															className='flex  place-content-between items-center'>
															{s.treino}
															<input
																type='text'
																value={s.treino}
																hidden
																name='treino'
																readOnly
															/>
															<input
																hidden
																type='number'
																name='aluno'
																readOnly
																defaultValue={aluno.idMember}
															/>
															<input
																type='text'
																hidden
																name='dia'
																defaultValue='domingo'
															/>
															<Link
																// className="bg-green-400 mt-3 w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2"
																to={s.id}>
																<AiFillEdit className='w-5 h-5  text-teal-500' />
															</Link>
									
														</Form>
													</div>
												))}
										</CardDescription>
									</CardHeader>
								</Card>
							</div> */}
						</>
					)}
				</div>
			</div>

			<Link
				className='bg-green-500 mt-3 text-white w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2'
				to={"novo"}>
				Planejar Treinos
			</Link>
			{ultimosTreinos.length > 0 && (
				<>
					<h2 className='  text-stone-500 font-medium mb-1 text-center mt-2'>
						ÚLTIMOS TREINOS
					</h2>
					<div className='text-stone-600 text-center place-content-center gap-2 container mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl'>
						{ultimosFeitos.map((u: any, index) => (
							<div key={index} className=''>
								<Card className=' h-full '>
									<CardHeader>
										<CardTitle>{u.data}</CardTitle>
										{u.treino.map((t: any, index: any) => (
											<CardDescription key={index}>{t.treino}</CardDescription>
										))}
									</CardHeader>
								</Card>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}
