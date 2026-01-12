import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import {
	getDesafioById,
	addMedida,
	updateMedida,
	deleteMedida,
	updateParticipante,
	DESAFIO_OBJETIVOS,
	type DesafioObjetivo,
} from "~/utils/desafio.server";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Constante para uso no cliente (evita depender do import de .server no bundle)
const OBJETIVOS_CLIENTE = [
	"Emagrecer",
	"Melhorar saude",
	"Fortalecimento Muscular",
	"Se sentir mais disposto",
	"Ganhar massa muscular",
	"Recomendação médica",
	"Melhorar condicionamento físico",
] as const;

export const loader: LoaderFunction = async ({ request, params }) => {
	const desafio = await getDesafioById(params.id!);
	if (!desafio) {
		throw new Response("Inscrição não encontrada", { status: 404 });
	}

	return json({ desafio });
};

export const action: ActionFunction = async ({ request, params }) => {
	const formData = await request.formData();
	const intent = formData.get("intent");
	const desafioId = params.id!;

	try {
		if (intent === "add") {
			const peso = formData.get("peso")
				? Number(formData.get("peso"))
				: undefined;
			const altura = formData.get("altura")
				? Number(formData.get("altura"))
				: undefined;
			const percentualGordura = formData.get("percentualGordura")
				? Number(formData.get("percentualGordura"))
				: undefined;
			const massaGordura = formData.get("massaGordura")
				? Number(formData.get("massaGordura"))
				: undefined;
			const massaMagra = formData.get("massaMagra")
				? Number(formData.get("massaMagra"))
				: undefined;
			const massaMuscularEsqueletica = formData.get("massaMuscularEsqueletica")
				? Number(formData.get("massaMuscularEsqueletica"))
				: undefined;
			const massaOssea = formData.get("massaOssea")
				? Number(formData.get("massaOssea"))
				: undefined;
			const aguaCorporal = formData.get("aguaCorporal")
				? Number(formData.get("aguaCorporal"))
				: undefined;
			const obs = String(formData.get("obs") || "").trim();

			await addMedida({
				desafioId,
				peso,
				altura,
				percentualGordura,
				massaGordura,
				massaMagra,
				massaMuscularEsqueletica,
				massaOssea,
				aguaCorporal,
				obs: obs || undefined,
			});
			return json({ ok: true, message: "Medida adicionada com sucesso!" });
		}

		if (intent === "update") {
			const medidaIndex = Number(formData.get("medidaIndex"));
			const peso = formData.get("peso")
				? Number(formData.get("peso"))
				: undefined;
			const altura = formData.get("altura")
				? Number(formData.get("altura"))
				: undefined;
			const percentualGordura = formData.get("percentualGordura")
				? Number(formData.get("percentualGordura"))
				: undefined;
			const massaGordura = formData.get("massaGordura")
				? Number(formData.get("massaGordura"))
				: undefined;
			const massaMagra = formData.get("massaMagra")
				? Number(formData.get("massaMagra"))
				: undefined;
			const massaMuscularEsqueletica = formData.get("massaMuscularEsqueletica")
				? Number(formData.get("massaMuscularEsqueletica"))
				: undefined;
			const massaOssea = formData.get("massaOssea")
				? Number(formData.get("massaOssea"))
				: undefined;
			const aguaCorporal = formData.get("aguaCorporal")
				? Number(formData.get("aguaCorporal"))
				: undefined;
			const obs = String(formData.get("obs") || "").trim();

			await updateMedida({
				desafioId,
				medidaIndex,
				peso,
				altura,
				percentualGordura,
				massaGordura,
				massaMagra,
				massaMuscularEsqueletica,
				massaOssea,
				aguaCorporal,
				obs: obs || undefined,
			});
			return json({ ok: true, message: "Medida atualizada com sucesso!" });
		}

		if (intent === "delete") {
			const medidaIndex = Number(formData.get("medidaIndex"));
			await deleteMedida(desafioId, medidaIndex);
			return json({ ok: true, message: "Medida removida com sucesso!" });
		}

		if (intent === "update_participante") {
			const aluno = String(formData.get("aluno") || "").trim();
			const nascimento = String(formData.get("nascimento") || "").trim();
			const whatsapp = String(formData.get("whatsapp") || "").trim();
			const obs = String(formData.get("obs") || "").trim();
			const objetivoValue = String(formData.get("objetivo") || "").trim();
			const objetivoValidado: DesafioObjetivo | null =
				DESAFIO_OBJETIVOS.includes(objetivoValue as DesafioObjetivo)
					? (objetivoValue as DesafioObjetivo)
					: null;

			await updateParticipante({
				desafioId,
				aluno: aluno || undefined,
				nascimento: nascimento ? new Date(nascimento) : undefined,
				whatsapp: whatsapp || undefined,
				objetivos: objetivoValidado ? [objetivoValidado] : undefined,
				obs: obs || undefined,
			});
			return json({ ok: true, message: "Dados do participante atualizados!" });
		}

		return json({ ok: false, error: "Ação inválida" }, { status: 400 });
	} catch (e: any) {
		return json(
			{ ok: false, error: e.message || "Erro ao processar" },
			{ status: 500 }
		);
	}
};

function formatDate(dateStr: string | Date) {
	return new Date(dateStr).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

function calcularIdade(nascimento: string | Date) {
	const hoje = new Date();
	const nasc = new Date(nascimento);
	let idade = hoje.getFullYear() - nasc.getFullYear();
	const m = hoje.getMonth() - nasc.getMonth();
	if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
		idade--;
	}
	return idade;
}

function formatObjetivoLabel(o: string) {
	if (o === "Melhorar saude") return "Melhorar saúde";
	return o;
}

export default function DesafioAdminMedidas() {
	const { desafio } = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();

	// Ordenar medidas por data (mais recente primeiro)
	const medidasOrdenadas = [...(desafio.medidas || [])].sort(
		(a: any, b: any) => new Date(b.data).getTime() - new Date(a.data).getTime()
	);

	return (
		<div className='md:container w-[97%] mx-auto mt-2 pb-8'>
			<div className='bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				{/* Header */}
				<div className='flex items-center justify-between flex-wrap gap-3 mb-6'>
					<div className='flex-1'>
						<div className='flex items-center gap-3 mb-2'>
							<Link
								to='/desafio/admin'
								className='text-sm text-stone-600 hover:underline'>
								← Voltar para lista
							</Link>
							{desafio.medidas && desafio.medidas.length > 0 && (
								<>
									<Link
										to={`/desafio/admin/${desafio.id}/relatorio`}
										target='_blank'
										className='text-sm text-blue-600 hover:underline'>
										👁️ Visualizar Relatório
									</Link>
									<a
										href={`/desafio/admin/${desafio.id}/relatorio-pdf`}
										download
										className='text-sm text-green-600 hover:underline font-semibold'>
										📄 Gerar PDF
									</a>
								</>
							)}
						</div>
						<h1 className='text-stone-900 text-2xl md:text-3xl font-bold mt-1'>
							{desafio.aluno || "Sem nome"}
						</h1>
						<p className='text-stone-600 text-sm mt-1'>
							{desafio.whatsapp} • {calcularIdade(desafio.nascimento)} anos •{" "}
							{new Date(desafio.nascimento).toLocaleDateString("pt-BR")}
						</p>
						{desafio.objetivo?.length > 0 && (
							<p className='text-stone-600 text-sm mt-1'>
								<strong>Objetivo:</strong> {desafio.objetivo[0]}
							</p>
						)}
						{desafio.obs && (
							<p className='text-stone-600 text-sm mt-1'>
								<strong>Obs:</strong> {desafio.obs}
							</p>
						)}
					</div>
				</div>

				{/* Feedback */}
				{actionData?.ok && (
					<div className='mb-4 rounded-lg bg-green-100 text-green-800 px-4 py-2'>
						{actionData.message}
					</div>
				)}
				{actionData?.error && (
					<div className='mb-4 rounded-lg bg-red-100 text-red-800 px-4 py-2'>
						{actionData.error}
					</div>
				)}

				{/* Formulário para editar participante */}
				<details className='mb-6 bg-blue-50 rounded-lg border border-blue-200'>
					<summary className='cursor-pointer p-4 text-blue-700 font-semibold hover:bg-blue-100 rounded-lg'>
						✏️ Editar Dados do Participante
					</summary>
					<div className='p-4 pt-0'>
						<Form
							method='post'
							className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<input type='hidden' name='intent' value='update_participante' />
							<div>
								<label className='block text-sm text-stone-700 mb-1'>
									Nome completo
								</label>
								<Input
									name='aluno'
									defaultValue={desafio.aluno || ""}
									placeholder='Nome do participante'
								/>
							</div>
							<div>
								<label className='block text-sm text-stone-700 mb-1'>
									Data de nascimento
								</label>
								<Input
									type='date'
									name='nascimento'
									defaultValue={
										desafio.nascimento
											? new Date(desafio.nascimento).toISOString().split("T")[0]
											: ""
									}
								/>
							</div>
							<div>
								<label className='block text-sm text-stone-700 mb-1'>
									WhatsApp
								</label>
								<Input
									name='whatsapp'
									defaultValue={desafio.whatsapp || ""}
									placeholder='(61) 9 9999-9999'
								/>
							</div>
							<div className='md:col-span-2'>
								<label className='block text-sm text-stone-700 mb-2'>
									Objetivo
								</label>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
									{OBJETIVOS_CLIENTE.map((o) => (
										<label
											key={o}
											className='inline-flex items-center gap-2 text-stone-800'>
											<input
												type='radio'
												name='objetivo'
												value={o}
												defaultChecked={
													Array.isArray(desafio.objetivo) &&
													desafio.objetivo.length > 0 &&
													desafio.objetivo[0] === o
												}
												className='h-4 w-4 accent-orange-400'
											/>
											<span>{formatObjetivoLabel(o)}</span>
										</label>
									))}
								</div>
							</div>
							<div className='md:col-span-2'>
								<label className='block text-sm text-stone-700 mb-1'>
									Observações
								</label>
								<Textarea
									name='obs'
									rows={3}
									defaultValue={desafio.obs || ""}
									placeholder='Observações sobre o participante'
								/>
							</div>
							<div className='md:col-span-2'>
								<Button
									type='submit'
									className='shadow shadow-stone-400/75 bg-blue-500 text-white rounded-xl'>
									Salvar Alterações
								</Button>
							</div>
						</Form>
					</div>
				</details>

				{/* Formulário para adicionar nova medida */}
				<div className='bg-stone-100/60 rounded-lg p-4 mb-6'>
					<h2 className='text-stone-900 text-lg font-semibold mb-3'>
						➕ Adicionar Nova Medida
					</h2>
					<Form method='post' className='grid grid-cols-1 md:grid-cols-3 gap-3'>
						<input type='hidden' name='intent' value='add' />
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Peso (kg)
							</label>
							<Input
								type='number'
								name='peso'
								step='0.1'
								min='0'
								placeholder='Ex.: 70.5'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Altura (cm)
							</label>
							<Input
								type='number'
								name='altura'
								step='1'
								min='0'
								placeholder='Ex.: 175'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Percentual de gordura corporal (%)
							</label>
							<Input
								type='number'
								name='percentualGordura'
								step='0.1'
								min='0'
								max='100'
								placeholder='Ex.: 25.5'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Massa de gordura (kg)
							</label>
							<Input
								type='number'
								name='massaGordura'
								step='0.1'
								min='0'
								placeholder='Ex.: 17.6'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Massa magra (kg)
							</label>
							<Input
								type='number'
								name='massaMagra'
								step='0.1'
								min='0'
								placeholder='Ex.: 52.9'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Massa muscular esquelética (kg)
							</label>
							<Input
								type='number'
								name='massaMuscularEsqueletica'
								step='0.1'
								min='0'
								placeholder='Ex.: 48.5'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Massa óssea (kg)
							</label>
							<Input
								type='number'
								name='massaOssea'
								step='0.1'
								min='0'
								placeholder='Ex.: 3.2'
							/>
						</div>
						<div>
							<label className='block text-sm text-stone-700 mb-1'>
								Água corporal (kg)
							</label>
							<Input
								type='number'
								name='aguaCorporal'
								step='0.1'
								min='0'
								placeholder='Ex.: 38.7'
							/>
						</div>
						<div className='md:col-span-3'>
							<label className='block text-sm text-stone-700 mb-1'>
								Observações
							</label>
							<Input name='obs' placeholder='Observações opcionais' />
						</div>
						<div className='md:col-span-3'>
							<Button
								type='submit'
								className='shadow shadow-stone-400/75 bg-orange-400 text-white rounded-xl'>
								Adicionar Medida
							</Button>
						</div>
					</Form>
				</div>

				{/* Histórico de medidas */}
				<h2 className='text-stone-900 text-lg font-semibold mb-3'>
					📊 Histórico de Medidas ({medidasOrdenadas.length})
				</h2>

				{medidasOrdenadas.length === 0 ? (
					<p className='text-stone-600'>Nenhuma medida registrada ainda.</p>
				) : (
					<div className='space-y-5'>
						{medidasOrdenadas.map((medida: any, displayIdx: number) => {
							// Encontrar o índice real no array original
							const realIndex = desafio.medidas.findIndex(
								(m: any) =>
									new Date(m.data).getTime() === new Date(medida.data).getTime()
							);

							return (
								<div
									key={displayIdx}
									className='bg-white rounded-lg border border-stone-200 p-5'>
									{/* Data */}
									<div className='mb-4 pb-3 border-b border-stone-200'>
										<span className='text-stone-700 text-sm font-medium'>
											📅 {formatDate(medida.data)}
										</span>
									</div>

									{/* Medidas básicas */}
									<div className='flex flex-wrap gap-3 mb-4'>
										{medida.peso && (
											<div className='bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm font-medium'>
												Peso: {medida.peso} kg
											</div>
										)}
										{medida.altura && (
											<div className='bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium'>
												Altura: {medida.altura} cm
											</div>
										)}
										{medida.imc && (
											<div className='bg-purple-100 text-purple-800 px-3 py-2 rounded-md text-sm font-medium'>
												IMC: {medida.imc}
											</div>
										)}
									</div>

									{/* Medidas de bioimpedância */}
									{(medida.percentualGordura ||
										medida.massaGordura ||
										medida.massaMagra ||
										medida.massaMuscularEsqueletica ||
										medida.massaOssea ||
										medida.aguaCorporal) && (
										<div className='mb-4 pb-4 border-b border-stone-200'>
											<h4 className='text-stone-700 text-sm font-semibold mb-2'>
												📊 Bioimpedância
											</h4>
											<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
												{medida.percentualGordura && (
													<div className='bg-orange-100 text-orange-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>Gordura:</span>{" "}
														{medida.percentualGordura}%
													</div>
												)}
												{medida.massaGordura && (
													<div className='bg-orange-100 text-orange-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>Massa gordura:</span>{" "}
														{medida.massaGordura} kg
													</div>
												)}
												{medida.massaMagra && (
													<div className='bg-cyan-100 text-cyan-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>Massa magra:</span>{" "}
														{medida.massaMagra} kg
													</div>
												)}
												{medida.massaMuscularEsqueletica && (
													<div className='bg-cyan-100 text-cyan-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>
															Massa muscular esquelética:
														</span>{" "}
														{medida.massaMuscularEsqueletica} kg
													</div>
												)}
												{medida.massaOssea && (
													<div className='bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>Massa óssea:</span>{" "}
														{medida.massaOssea} kg
													</div>
												)}
												{medida.aguaCorporal && (
													<div className='bg-indigo-100 text-indigo-800 px-3 py-2 rounded-md text-sm'>
														<span className='font-medium'>Água corporal:</span>{" "}
														{medida.aguaCorporal} kg
													</div>
												)}
											</div>
										</div>
									)}

									{/* Observações */}
									{medida.obs && (
										<div className='mb-4'>
											<p className='text-stone-600 text-sm'>
												<strong className='text-stone-700'>Obs:</strong>{" "}
												{medida.obs}
											</p>
										</div>
									)}

									{/* Formulário de edição inline */}
									<details className='mt-4 pt-4 border-t border-stone-200'>
										<summary className='cursor-pointer text-sm text-orange-600 hover:underline font-medium'>
											Editar / Excluir
										</summary>
										<div className='mt-4 p-4 bg-stone-50 rounded-lg'>
											<Form
												method='post'
												className='grid grid-cols-1 md:grid-cols-3 gap-3'>
												<input type='hidden' name='intent' value='update' />
												<input
													type='hidden'
													name='medidaIndex'
													value={realIndex}
												/>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Peso (kg)
													</label>
													<Input
														type='number'
														name='peso'
														step='0.1'
														min='0'
														defaultValue={medida.peso || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Altura (cm)
													</label>
													<Input
														type='number'
														name='altura'
														step='1'
														min='0'
														defaultValue={medida.altura || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Percentual de gordura (%)
													</label>
													<Input
														type='number'
														name='percentualGordura'
														step='0.1'
														min='0'
														max='100'
														defaultValue={medida.percentualGordura || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Massa de gordura (kg)
													</label>
													<Input
														type='number'
														name='massaGordura'
														step='0.1'
														min='0'
														defaultValue={medida.massaGordura || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Massa magra (kg)
													</label>
													<Input
														type='number'
														name='massaMagra'
														step='0.1'
														min='0'
														defaultValue={medida.massaMagra || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Massa muscular esquelética (kg)
													</label>
													<Input
														type='number'
														name='massaMuscularEsqueletica'
														step='0.1'
														min='0'
														defaultValue={medida.massaMuscularEsqueletica || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Massa óssea (kg)
													</label>
													<Input
														type='number'
														name='massaOssea'
														step='0.1'
														min='0'
														defaultValue={medida.massaOssea || ""}
													/>
												</div>
												<div>
													<label className='block text-sm text-stone-700 mb-1'>
														Água corporal (kg)
													</label>
													<Input
														type='number'
														name='aguaCorporal'
														step='0.1'
														min='0'
														defaultValue={medida.aguaCorporal || ""}
													/>
												</div>
												<div className='md:col-span-3'>
													<label className='block text-sm text-stone-700 mb-1'>
														Observações
													</label>
													<Input name='obs' defaultValue={medida.obs || ""} />
												</div>
												<div className='md:col-span-3 flex gap-2'>
													<Button
														type='submit'
														className='shadow shadow-stone-400/75 bg-blue-500 text-white rounded-xl'>
														Salvar Alterações
													</Button>
												</div>
											</Form>
											<Form method='post' className='mt-2'>
												<input type='hidden' name='intent' value='delete' />
												<input
													type='hidden'
													name='medidaIndex'
													value={realIndex}
												/>
												<Button
													type='submit'
													variant='destructive'
													className='rounded-xl'
													onClick={(e) => {
														if (
															!confirm(
																"Tem certeza que deseja excluir esta medida?"
															)
														) {
															e.preventDefault();
														}
													}}>
													Excluir Medida
												</Button>
											</Form>
										</div>
									</details>
								</div>
							);
						})}
					</div>
				)}

				{/* Gráfico de evolução (resumo simples) */}
				{medidasOrdenadas.length >= 2 && (
					<div className='mt-6 bg-stone-100/60 rounded-lg p-4'>
						<h3 className='text-stone-900 font-semibold mb-2'>
							📈 Resumo da Evolução
						</h3>
						{(() => {
							const primeira = medidasOrdenadas[medidasOrdenadas.length - 1];
							const ultima = medidasOrdenadas[0];
							const diffPeso =
								primeira.peso && ultima.peso
									? (ultima.peso - primeira.peso).toFixed(1)
									: null;
							const diffIMC =
								primeira.imc && ultima.imc
									? (ultima.imc - primeira.imc).toFixed(1)
									: null;

							return (
								<div className='flex flex-wrap gap-4 text-sm'>
									{diffPeso && (
										<div>
											<span className='text-stone-600'>Variação de peso: </span>
											<span
												className={`font-semibold ${
													Number(diffPeso) < 0
														? "text-green-600"
														: Number(diffPeso) > 0
														? "text-red-600"
														: "text-stone-600"
												}`}>
												{Number(diffPeso) > 0 ? "+" : ""}
												{diffPeso} kg
											</span>
										</div>
									)}
									{diffIMC && (
										<div>
											<span className='text-stone-600'>Variação de IMC: </span>
											<span
												className={`font-semibold ${
													Number(diffIMC) < 0
														? "text-green-600"
														: Number(diffIMC) > 0
														? "text-red-600"
														: "text-stone-600"
												}`}>
												{Number(diffIMC) > 0 ? "+" : ""}
												{diffIMC}
											</span>
										</div>
									)}
									<div className='text-stone-600'>
										Período:{" "}
										{new Date(primeira.data).toLocaleDateString("pt-BR")} →{" "}
										{new Date(ultima.data).toLocaleDateString("pt-BR")}
									</div>
								</div>
							);
						})()}
					</div>
				)}
			</div>
		</div>
	);
}
