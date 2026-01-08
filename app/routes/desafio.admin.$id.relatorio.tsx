import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDesafioById } from "~/utils/desafio.server";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

export const loader: LoaderFunction = async ({ params }) => {
	const desafio = await getDesafioById(params.id!);
	if (!desafio) {
		throw new Response("Inscrição não encontrada", { status: 404 });
	}

	return json({ desafio });
};

function formatDate(dateStr: string | Date) {
	return new Date(dateStr).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
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

export default function RelatorioDesafio() {
	const { desafio } = useLoaderData<typeof loader>();

	// Ordenar medidas por data (mais antiga primeiro para gráficos)
	const medidasOrdenadas = [...(desafio.medidas || [])].sort(
		(a: any, b: any) => new Date(a.data).getTime() - new Date(b.data).getTime()
	);

	// Preparar dados para gráficos
	const labels = medidasOrdenadas.map((m: any) => formatDate(m.data));
	const dadosPeso = medidasOrdenadas.map((m: any) => m.peso || null);
	const dadosIMC = medidasOrdenadas.map((m: any) => m.imc || null);
	const dadosGordura = medidasOrdenadas.map(
		(m: any) => m.percentualGordura || null
	);
	const dadosMassaMagra = medidasOrdenadas.map(
		(m: any) => m.massaMagra || null
	);
	const dadosMassaGordura = medidasOrdenadas.map(
		(m: any) => m.massaGordura || null
	);
	const dadosAguaCorporal = medidasOrdenadas.map(
		(m: any) => m.aguaCorporal || null
	);

	// Configuração de gráfico de linha para Peso e IMC
	const dadosGraficoPesoIMC = {
		labels,
		datasets: [
			{
				label: "Peso (kg)",
				data: dadosPeso,
				borderColor: "rgb(59, 130, 246)",
				backgroundColor: "rgba(59, 130, 246, 0.1)",
				fill: true,
				tension: 0.4,
				yAxisID: "y",
			},
			{
				label: "IMC",
				data: dadosIMC,
				borderColor: "rgb(147, 51, 234)",
				backgroundColor: "rgba(147, 51, 234, 0.1)",
				fill: true,
				tension: 0.4,
				yAxisID: "y1",
			},
		],
	};

	// Configuração de gráfico de barras para composição corporal
	const dadosGraficoComposicao = {
		labels,
		datasets: [
			{
				label: "Percentual de Gordura (%)",
				data: dadosGordura,
				backgroundColor: "rgba(249, 115, 22, 0.7)",
				borderColor: "rgb(249, 115, 22)",
				borderWidth: 1,
			},
			{
				label: "Massa Magra (kg)",
				data: dadosMassaMagra,
				backgroundColor: "rgba(34, 197, 94, 0.7)",
				borderColor: "rgb(34, 197, 94)",
				borderWidth: 1,
			},
			{
				label: "Massa de Gordura (kg)",
				data: dadosMassaGordura,
				backgroundColor: "rgba(239, 68, 68, 0.7)",
				borderColor: "rgb(239, 68, 68)",
				borderWidth: 1,
			},
		],
	};

	// Gráfico de água corporal
	const dadosGraficoAgua = {
		labels,
		datasets: [
			{
				label: "Água Corporal (kg)",
				data: dadosAguaCorporal,
				borderColor: "rgb(99, 102, 241)",
				backgroundColor: "rgba(99, 102, 241, 0.1)",
				fill: true,
				tension: 0.4,
			},
		],
	};

	const opcoesPesoIMC = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Evolução do Peso e IMC",
				font: {
					size: 16,
				},
			},
		},
		scales: {
			y: {
				type: "linear" as const,
				display: true,
				position: "left" as const,
				title: {
					display: true,
					text: "Peso (kg)",
				},
			},
			y1: {
				type: "linear" as const,
				display: true,
				position: "right" as const,
				title: {
					display: true,
					text: "IMC",
				},
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	};

	const opcoesComposicao = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Composição Corporal",
				font: {
					size: 16,
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Valor",
				},
			},
		},
	};

	const opcoesAgua = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Evolução da Água Corporal",
				font: {
					size: 16,
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Água Corporal (kg)",
				},
			},
		},
	};

	// Calcular variações
	const primeiraMedida = medidasOrdenadas[0];
	const ultimaMedida = medidasOrdenadas[medidasOrdenadas.length - 1];
	const variacaoPeso =
		primeiraMedida?.peso && ultimaMedida?.peso
			? (ultimaMedida.peso - primeiraMedida.peso).toFixed(1)
			: null;
	const variacaoIMC =
		primeiraMedida?.imc && ultimaMedida?.imc
			? (ultimaMedida.imc - primeiraMedida.imc).toFixed(1)
			: null;
	const variacaoGordura =
		primeiraMedida?.percentualGordura && ultimaMedida?.percentualGordura
			? (
					ultimaMedida.percentualGordura - primeiraMedida.percentualGordura
			  ).toFixed(1)
			: null;
	const variacaoMassaMagra =
		primeiraMedida?.massaMagra && ultimaMedida?.massaMagra
			? (ultimaMedida.massaMagra - primeiraMedida.massaMagra).toFixed(1)
			: null;

	return (
		<div className='w-full min-h-screen bg-white p-8 print:p-4'>
			{/* Cabeçalho */}
			<div className='mb-8 border-b-2 border-stone-300 pb-4 print:mb-4 print:pb-2'>
				<div className='flex items-center justify-between mb-4'>
					<img src='/logo_preto.svg' className='h-16 print:h-12' alt='Logo' />
					<div className='text-right'>
						<h1 className='text-3xl font-bold text-stone-900 print:text-2xl'>
							Relatório do Desafio 21 Dias
						</h1>
						<p className='text-stone-600 text-sm mt-1'>
							Gerado em {new Date().toLocaleDateString("pt-BR")}
						</p>
					</div>
				</div>
			</div>

			{/* Informações do Participante */}
			<div className='mb-8 bg-stone-50 rounded-lg p-6 print:p-4 print:mb-4'>
				<h2 className='text-2xl font-bold text-stone-900 mb-4 print:text-xl print:mb-2'>
					Informações do Participante
				</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 print:grid-cols-2 print:gap-2'>
					<div>
						<p className='text-sm text-stone-600'>Nome</p>
						<p className='font-semibold text-stone-900'>
							{desafio.aluno || "N/A"}
						</p>
					</div>
					<div>
						<p className='text-sm text-stone-600'>Idade</p>
						<p className='font-semibold text-stone-900'>
							{calcularIdade(desafio.nascimento)} anos
						</p>
					</div>
					<div>
						<p className='text-sm text-stone-600'>WhatsApp</p>
						<p className='font-semibold text-stone-900'>
							{desafio.whatsapp || "N/A"}
						</p>
					</div>
					<div>
						<p className='text-sm text-stone-600'>Objetivos</p>
						<p className='font-semibold text-stone-900'>
							{desafio.objetivo?.join(", ") || "N/A"}
						</p>
					</div>
				</div>
				{desafio.obs && (
					<div className='mt-4'>
						<p className='text-sm text-stone-600'>Observações</p>
						<p className='text-stone-900'>{desafio.obs}</p>
					</div>
				)}
			</div>

			{/* Resumo da Evolução */}
			{medidasOrdenadas.length >= 2 && (
				<div className='mb-8 bg-blue-50 rounded-lg p-6 print:p-4 print:mb-4'>
					<h2 className='text-2xl font-bold text-stone-900 mb-4 print:text-xl print:mb-2'>
						Resumo da Evolução
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 print:grid-cols-2 print:gap-2'>
						{variacaoPeso && (
							<div className='bg-white rounded p-3 print:p-2'>
								<p className='text-sm text-stone-600 mb-1'>Variação de Peso</p>
								<p
									className={`text-2xl font-bold print:text-xl ${
										Number(variacaoPeso) < 0
											? "text-green-600"
											: Number(variacaoPeso) > 0
											? "text-red-600"
											: "text-stone-600"
									}`}>
									{Number(variacaoPeso) > 0 ? "+" : ""}
									{variacaoPeso} kg
								</p>
							</div>
						)}
						{variacaoIMC && (
							<div className='bg-white rounded p-3 print:p-2'>
								<p className='text-sm text-stone-600 mb-1'>Variação de IMC</p>
								<p
									className={`text-2xl font-bold print:text-xl ${
										Number(variacaoIMC) < 0
											? "text-green-600"
											: Number(variacaoIMC) > 0
											? "text-red-600"
											: "text-stone-600"
									}`}>
									{Number(variacaoIMC) > 0 ? "+" : ""}
									{variacaoIMC}
								</p>
							</div>
						)}
						{variacaoGordura && (
							<div className='bg-white rounded p-3 print:p-2'>
								<p className='text-sm text-stone-600 mb-1'>
									Variação % Gordura
								</p>
								<p
									className={`text-2xl font-bold print:text-xl ${
										Number(variacaoGordura) < 0
											? "text-green-600"
											: Number(variacaoGordura) > 0
											? "text-red-600"
											: "text-stone-600"
									}`}>
									{Number(variacaoGordura) > 0 ? "+" : ""}
									{variacaoGordura}%
								</p>
							</div>
						)}
						{variacaoMassaMagra && (
							<div className='bg-white rounded p-3 print:p-2'>
								<p className='text-sm text-stone-600 mb-1'>
									Variação Massa Magra
								</p>
								<p
									className={`text-2xl font-bold print:text-xl ${
										Number(variacaoMassaMagra) > 0
											? "text-green-600"
											: Number(variacaoMassaMagra) < 0
											? "text-red-600"
											: "text-stone-600"
									}`}>
									{Number(variacaoMassaMagra) > 0 ? "+" : ""}
									{variacaoMassaMagra} kg
								</p>
							</div>
						)}
					</div>
					<p className='text-sm text-stone-600 mt-4'>
						Período: {formatDate(primeiraMedida.data)} →{" "}
						{formatDate(ultimaMedida.data)}
					</p>
				</div>
			)}

			{/* Gráficos */}
			{medidasOrdenadas.length > 0 && (
				<div className='space-y-8 mb-8 print:space-y-4 print:mb-4'>
					{dadosPeso.some((p) => p !== null) &&
						dadosIMC.some((i) => i !== null) && (
							<div className='bg-white border border-stone-200 rounded-lg p-6 print:p-4'>
								<div
									style={{ height: "400px", width: "100%" }}
									className='print:h-64'>
									<Line data={dadosGraficoPesoIMC} options={opcoesPesoIMC} />
								</div>
							</div>
						)}

					{(dadosGordura.some((g) => g !== null) ||
						dadosMassaMagra.some((m) => m !== null) ||
						dadosMassaGordura.some((m) => m !== null)) && (
						<div className='bg-white border border-stone-200 rounded-lg p-6 print:p-4'>
							<div
								style={{ height: "400px", width: "100%" }}
								className='print:h-64'>
								<Bar data={dadosGraficoComposicao} options={opcoesComposicao} />
							</div>
						</div>
					)}

					{dadosAguaCorporal.some((a) => a !== null) && (
						<div className='bg-white border border-stone-200 rounded-lg p-6 print:p-4'>
							<div
								style={{ height: "400px", width: "100%" }}
								className='print:h-64'>
								<Line data={dadosGraficoAgua} options={opcoesAgua} />
							</div>
						</div>
					)}
				</div>
			)}

			{/* Tabela de Medidas */}
			<div className='mb-8 print:mb-4'>
				<h2 className='text-2xl font-bold text-stone-900 mb-4 print:text-xl print:mb-2'>
					Histórico Completo de Medidas
				</h2>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border border-stone-300 text-sm print:text-xs'>
						<thead>
							<tr className='bg-stone-100'>
								<th className='border border-stone-300 p-2 text-left'>Data</th>
								<th className='border border-stone-300 p-2 text-right'>
									Peso (kg)
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Altura (cm)
								</th>
								<th className='border border-stone-300 p-2 text-right'>IMC</th>
								<th className='border border-stone-300 p-2 text-right'>
									% Gordura
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Massa Gordura (kg)
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Massa Magra (kg)
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Massa Muscular (kg)
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Massa Óssea (kg)
								</th>
								<th className='border border-stone-300 p-2 text-right'>
									Água (kg)
								</th>
							</tr>
						</thead>
						<tbody>
							{medidasOrdenadas.map((medida: any, index: number) => (
								<tr
									key={index}
									className={index % 2 === 0 ? "bg-white" : "bg-stone-50"}>
									<td className='border border-stone-300 p-2'>
										{formatDate(medida.data)}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.peso || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.altura || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.imc || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.percentualGordura || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.massaGordura || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.massaMagra || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.massaMuscularEsqueletica || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.massaOssea || "-"}
									</td>
									<td className='border border-stone-300 p-2 text-right'>
										{medida.aguaCorporal || "-"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Rodapé */}
			<div className='mt-8 pt-4 border-t border-stone-300 text-center text-sm text-stone-600 print:mt-4 print:pt-2'>
				<p>Relatório gerado automaticamente pelo sistema de Desafio 21 Dias</p>
				<p className='mt-1'>Quattor - Academia</p>
			</div>
		</div>
	);
}
