import type {
	ActionFunction,
	LoaderFunction,
	MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	DESAFIO_OBJETIVOS,
	createDesafioInscricao,
	type DesafioObjetivo,
} from "~/utils/desafio.server";

// Constante duplicada para uso no cliente
const OBJETIVOS_CLIENTE = [
	"Melhorar saude",
	"Fortalecimento Muscular",
	"Se sentir mais disposto",
	"Emagrecer",
	"Ganhar massa muscular",
	"Recomendação médica",
] as const;

type LoaderData = {
	inicio: string;
};

function getDesafioInicio() {
	return process.env.NEXT_PUBLIC_DESAFIO_INICIO || "2026-01-19";
}

function formatObjetivoLabel(o: string) {
	if (o === "Melhorar saude") return "Melhorar saúde";
	return o;
}

function maskWhatsApp(value: string) {
	const digits = value.replace(/\D/g, "").slice(0, 11);
	const ddd = digits.slice(0, 2);
	const p1 = digits.slice(2, 3);
	const p2 = digits.slice(3, 7);
	const p3 = digits.slice(7, 11);

	if (digits.length <= 2) return digits;
	if (digits.length <= 3) return `(${ddd}) ${p1}`;
	if (digits.length <= 7) return `(${ddd}) ${p1} ${p2}`;
	return `(${ddd}) ${p1} ${p2}-${p3}`;
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Desafio - Sua Nova Versão | Quattor Academia" },
		{
			name: "description",
			content:
				"Participe do Desafio gratuito de 21 dias da Quattor Academia e dê o primeiro passo para a sua nova versão.",
		},
	];
};

export const loader: LoaderFunction = async () => {
	const inicio = getDesafioInicio();
	return json<LoaderData>({ inicio });
};

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const aluno = String(formData.get("aluno") || "").trim();
	const nascimento = String(formData.get("nascimento") || "").trim();
	const whatsapp = String(formData.get("whatsapp") || "").trim();
	const obs = String(formData.get("obs") || "").trim();
	const objetivosValues = formData
		.getAll("objetivos")
		.map(String)
		.filter((o): o is DesafioObjetivo =>
			DESAFIO_OBJETIVOS.includes(o as DesafioObjetivo)
		);

	const errors: Record<string, string> = {};
	if (!aluno) errors.aluno = "Informe seu nome.";
	if (!nascimento) errors.nascimento = "Informe sua data de nascimento.";
	if (!whatsapp || whatsapp.replace(/\D/g, "").length < 8) {
		errors.whatsapp = "Informe seu WhatsApp.";
	}

	if (Object.keys(errors).length) {
		return json({ ok: false, errors }, { status: 400 });
	}

	try {
		await createDesafioInscricao({
			aluno,
			nascimento: new Date(nascimento),
			whatsapp,
			objetivos: objetivosValues,
			obs,
		});
		return json({ ok: true });
	} catch (e) {
		return json(
			{ ok: false, serverError: "Não foi possível enviar sua inscrição." },
			{ status: 500 }
		);
	}
};

export default function DesafioIndex() {
	const actionData = useActionData<typeof action>();
	const { inicio } = useLoaderData<LoaderData>();
	return (
		<div className='grid md:container w-[97%] mx-auto mt-2 grid-cols-12 gap-3'>
			{/* OBJETIVO */}
			<div className='col-span-12 bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<div className='flex items-center justify-between gap-3 flex-wrap'>
					<h1 className='text-stone-900 text-2xl md:text-3xl font-bold'>
						<span className='mr-2'>🎯</span> OBJETIVO DO DESAFIO
					</h1>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant='link'
								className='text-stone-800 underline underline-offset-4 px-0'>
								📌 Regras
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>📌 REGRAS DO DESAFIO</DialogTitle>
							</DialogHeader>
							<div className='text-stone-800'>
								<ul className='list-disc list-inside space-y-2'>
									<li>
										Treinar no mínimo 3x por semana na academia, seguindo o
										treino específico
									</li>
									<li>
										Realizar no mínimo 2 sessões de aeróbico por semana (livre
										escolha). Pode ser: caminhada, corrida, escada, bicicleta,
										fitdance, ballet, spinning, lutas — na academia ou fora
										dela.
									</li>
									<li>Participar dos aulões (opcional, mas recomendado)</li>
									<li>
										Aberto a todas as participantes do desafio e conta como
										aeróbico ou treino complementar
									</li>
									<li>Registrar presença</li>
									<li>Autocuidado e apoio</li>
									<li>Uma atitude diária por você</li>
									<li>Apoiar e respeitar o ritmo dos outros participantes</li>
								</ul>
							</div>
						</DialogContent>
					</Dialog>
				</div>
				<p className='mt-3 text-stone-800 leading-relaxed'>
					Um desafio de 21 dias criado para ajudar alunos da academia a:
					<br />
					começar da forma correta alcanças os seus objetivos; criar constância
					nos treinos, aumentar energia e disposição; iniciar o ano com apoio,
					variedade e motivação.
				</p>
			</div>

			{/* DURAÇÃO e INÍCIO */}
			<div className='col-span-12 md:col-span-6 bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<h2 className='text-stone-900 text-xl md:text-2xl font-semibold'>
					<span className='mr-2'>📆</span> DURAÇÃO
				</h2>
				<p className='mt-2 text-stone-800'>21 dias consecutivos</p>
			</div>
			<div className='col-span-12 md:col-span-6 bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<h2 className='text-stone-900 text-xl md:text-2xl font-semibold'>
					Início
				</h2>
				<p className='mt-2 text-stone-800'>
					{new Date(inicio).toLocaleDateString("pt-BR")}
				</p>
			</div>

			{/* ESTRUTURA */}
			<div className='col-span-12 bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<h2 className='text-stone-900 text-xl md:text-2xl font-semibold'>
					Estrutura Geral do treino do COMPROMISSO 21
				</h2>
				<ul className='mt-3 list-disc list-inside text-stone-800 space-y-2'>
					<li>
						Frequência: 3 a 5x por semana na musculação, com treino específico
						elaborado para o desafio.
					</li>
					<li>
						Aulas da academia ou aeróbico para cumprir a meta mínima de 2x,
						podendo ser na academia ou não.
					</li>
					<li>Bioimpedância semanal - 3 no total</li>
					<li>
						Indicações gerais de alimentação: Orientações educativas — não é
						dieta
					</li>
					<li>2 aulões especiais.</li>
				</ul>
			</div>

			{/* FORMULÁRIO DE INSCRIÇÃO */}
			<div className='col-span-12 bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<h2 className='text-stone-900 text-xl md:text-2xl font-semibold'>
					Quero participar
				</h2>
				{actionData?.ok && (
					<div className='mt-3 rounded-lg bg-green-100 text-green-800 px-4 py-2'>
						Inscrição enviada! Entraremos em contato pelo WhatsApp.
					</div>
				)}
				{actionData?.serverError && (
					<div className='mt-3 rounded-lg bg-red-100 text-red-800 px-4 py-2'>
						{actionData.serverError}
					</div>
				)}
				<Form
					method='post'
					className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<label className='block text-sm text-stone-700 mb-1'>
							Nome completo
						</label>
						<Input name='aluno' placeholder='Seu nome' />
						{actionData?.errors?.aluno && (
							<p className='text-xs text-red-600 mt-1'>
								{actionData.errors.aluno}
							</p>
						)}
					</div>
					<div>
						<label className='block text-sm text-stone-700 mb-1'>
							Data de nascimento
						</label>
						<Input type='date' name='nascimento' />
						{actionData?.errors?.nascimento && (
							<p className='text-xs text-red-600 mt-1'>
								{actionData.errors.nascimento}
							</p>
						)}
					</div>
					<div>
						<label className='block text-sm text-stone-700 mb-1'>
							WhatsApp
						</label>
						<Input
							name='whatsapp'
							placeholder='(61) 9 9999-9999'
							inputMode='tel'
							maxLength={16}
							onChange={(e) => {
								e.target.value = maskWhatsApp(e.target.value);
							}}
						/>
						{actionData?.errors?.whatsapp && (
							<p className='text-xs text-red-600 mt-1'>
								{actionData.errors.whatsapp}
							</p>
						)}
					</div>
					<div className='md:col-span-2'>
						<label className='block text-sm text-stone-700 mb-2'>
							Objetivos (múltipla escolha)
						</label>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
							{OBJETIVOS_CLIENTE.map((o) => (
								<label
									key={o}
									className='inline-flex items-center gap-2 text-stone-800'>
									<input
										type='checkbox'
										name='objetivos'
										value={o}
										className='h-4 w-4 accent-orange-400'
									/>
									<span>{formatObjetivoLabel(o)}</span>
								</label>
							))}
						</div>
					</div>
					<div className='md:col-span-2'>
						<label className='block text-sm text-stone-700 mb-1'>
							Observações (opcional)
						</label>
						<Textarea
							name='obs'
							rows={3}
							placeholder='Alguma observação que queira compartilhar'
						/>
					</div>
					<div className='md:col-span-2'>
						<Button
							type='submit'
							className='shadow shadow-stone-400/75 bg-orange-400 text-white rounded-xl md:px-8'>
							Quero participar
						</Button>
					</div>
				</Form>
				<p className='text-xs text-stone-600 mt-3'>
					As medidas serão registradas pelo professor durante o acompanhamento.
				</p>
			</div>

			{/* CTA */}
			<div className='col-span-12 flex flex-col items-center gap-3'>
				{/* Regras agora também estão no topo (ao lado do título) */}
			</div>
		</div>
	);
}
