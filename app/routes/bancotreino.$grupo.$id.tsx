import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getExercicios } from "~/utils/treinos.server";

export const loader: LoaderFunction = async ({ request, params }) => {
	const exercicio = await getExercicios(params.id);

	return exercicio;
};

export default function Exercicio() {
	const { exercicios }: any = useLoaderData();

	return (
		<>
			<div className='text-xl mt-4 text-center'>Exercício Cadastrado</div>
			<div className='overflow-hidden'>
				<table className='min-w-full shadow-lg bg-white text-left text-sm font-light'>
					<thead className='border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600'>
						<tr>
							<th scope='col' className='px-6 py-4'>
								Número
							</th>
							<th scope='col' className='px-6 py-4'>
								Nome
							</th>
						</tr>
					</thead>
					<tbody>
						{exercicios.map((exe: any, index: any) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{exe.nome}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
