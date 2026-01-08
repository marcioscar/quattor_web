import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
	Form,
	useActionData,
	useLoaderData,
	useNavigation,
} from "@remix-run/react";

import _ from "lodash";
import { ImEnter } from "react-icons/im";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/toaster";

import { commitSession, getSession } from "~/session.server";
import { getAluno, getAlunoGym } from "~/utils/aluno.server";

type LoaderData = {
	redirectTo: string;
	motivo?: string;
};

type ActionData = { message: string } | { ok: true };

function safeRedirect(to: unknown, fallback = "/aluno") {
	if (typeof to !== "string") return fallback;
	if (!to.startsWith("/")) return fallback;
	// evita open redirect simples
	if (to.startsWith("//")) return fallback;
	return to;
}

export const loader: LoaderFunction = async ({ request }) => {
	const session = await getSession(request.headers.get("Cookie"));
	const motivo = session.get("aluno")?.motivo as string | undefined;
	const red = session.get("aluno")?.red as string | undefined;

	return json<LoaderData>({
		redirectTo: safeRedirect(red, "/aluno"),
		motivo,
	});
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const matricula = form.get("matricula");
	const redirectTo = safeRedirect(form.get("redirectTo"), "/aluno");

	// @ts-ignore - getAluno retorna array (projeto atual)
	const alunoa = await getAluno(matricula);
	const aluno = alunoa[0] ? alunoa[0] : "";

	let alunoGym: any[] = [];
	if (aluno?.membershipStatus === "Inactive") {
		const alunoGymtudo = await getAlunoGym(Number(matricula));
		alunoGym = alunoGymtudo.map((a: any) => a.gympassId);
	}

	const plano = _.filter(aluno.memberships, { membershipStatus: "active" }).map(
		(n) => n.name
	);

	if (!aluno?.idMember) {
		return json<ActionData>(
			{ message: "Aluno não encontrado" },
			{ status: 400 }
		);
	}
	if (aluno.membershipStatus === "Inactive" && alunoGym[0] === null) {
		return json<ActionData>(
			{ message: "Seu plano está Inativo. Favor procurar recepção." },
			{ status: 400 }
		);
	}

	const session = await getSession(request.headers.get("Cookie"));
	session.set("aluno", {
		id: aluno.idMember,
		plano,
		status: aluno.membershipStatus,
	});

	return redirect(redirectTo, {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
};

export default function Login() {
	const transition = useNavigation();
	const data = useActionData<ActionData>();
	const { redirectTo, motivo } = useLoaderData<typeof loader>();

	return (
		<div className='h-screen w-full bg-stone-100 font-Roboto '>
			<div className='bg-stone-400'>
				<div className='text-gray-600 body-font  min-h-screen '>
					<div className='h-full   pt-20 items-center flex flex-col gap-y-4'>
						<Form
							method='post'
							className='rounded-2xl bg-white bg-opacity-80  p-4 md:w-1/2 lg:w1/4 w-11/12'>
							<input type='hidden' value={redirectTo} name='redirectTo' />

							<label htmlFor='matricula' className=' font-semibold mb-9 '>
								Número de Matricula
							</label>
							<div className='relative  my-4 flex w-full flex-wrap items-stretch mb-3'>
								<span className='z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3'>
									<ImEnter />
								</span>
								<input
									type='number'
									name='matricula'
									required
									autoFocus
									placeholder='Pegue seu número na recepção'
									className='px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded-xl text-sm border shadow outline-none border-slate-200 focus:outline-none focus:ring w-full pl-10'
								/>
							</div>
							<Toaster />
							<div className='w-full text-center'>
								<button
									disabled={
										transition.state === "submitting" ||
										transition.state === "loading"
									}
									type='submit'
									name='Entrar'
									className={
										"" + transition.state === "loading"
											? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold"
											: "rounded-xl mt-2  bg-stone-500 text-white px-3 py-2  font-semibold hover:bg-orange-400 hover:-translate-y-1"
									}>
									{transition.state === "submitting"
										? "Localizando..."
										: transition.state === "loading"
										? "Carregando..."
										: "Entrar"}
								</button>
								{data && "message" in data && data.message && (
									<div className=' mt-3  p-1 bg-white rounded-lg '>
										<Alert variant='destructive'>
											<ExclamationTriangleIcon className='h-4 w-4' />
											<AlertTitle>Erro</AlertTitle>
											<AlertDescription>{data.message}</AlertDescription>
										</Alert>
									</div>
								)}
							</div>
						</Form>

						{motivo && (
							<p className='text-center text-md text-white font-medium px-4 py-3 bg-red-600 rounded-lg'>
								{motivo}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
