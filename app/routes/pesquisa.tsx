import { getAlunoCPF, getAlunoNome } from "@/utils/aluno.server";
import { json, type LoaderFunction } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Outlet, useFetcher } from "@remix-run/react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const loader: LoaderFunction = async ({ request, params }) => {
	const url = new URL(request.url);

	const par = url.searchParams.get("aluno");
	const parcpf = url.searchParams.get("cpf");

	if (par) {
		const alunos = await getAlunoNome(par);

		return json({ alunos });
	} else {
		const alunos = await getAlunoCPF(parcpf);

		return json({ alunos });
	}
};

export default function Planejamento() {
	const nome = useFetcher();
	const alunos = nome.data?.alunos;

	return (
		<>
			<div className=' container mx-auto p-3 bg-stone-50'>
				<div className='md:flex md:space-y-0 space-y-3 place-content-evenly w-full '>
					<nome.Form method='get' action='.'>
						<div className=' flex  items-center space-x-2'>
							<Input
								className='md:w-96'
								name='aluno'
								type='search'
								placeholder='Nome'
							/>
							<Button name='nome' className=' bg-stone-400' type='submit'>
								Pesquisar
							</Button>
						</div>
					</nome.Form>
					<nome.Form method='get' action='.'>
						<div className='flex  space-x-2'>
							<Input
								className='md:w-96'
								name='cpf'
								type='search'
								placeholder='Cpf'
							/>
							<Button name='cpf' className=' bg-stone-400' type='submit'>
								Pesquisar
							</Button>
						</div>
					</nome.Form>
				</div>

				<Table className='md:w-1/2 '>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>Matrícula</TableHead>
							<TableHead>Nome</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{alunos?.map((aluno: any) => (
							<TableRow key={aluno.idMember}>
								<TableCell className='font-medium'>{aluno.idMember}</TableCell>
								<TableCell>{aluno.firstName + " " + aluno.lastName}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</>
	);
}
