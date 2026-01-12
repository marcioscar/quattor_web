import { prisma } from "~/utils/prisma.server";
import type { Prisma } from "@prisma/client";

export const DESAFIO_OBJETIVOS = [
	"Emagrecer",
	"Melhorar saude",
	"Fortalecimento Muscular",
	"Se sentir mais disposto",
	"Ganhar massa muscular",
	"Recomendação médica",
	"Melhorar condicionamento físico",
] as const;

export type DesafioObjetivo = (typeof DESAFIO_OBJETIVOS)[number];

export type Medida = {
	peso?: number | null;
	altura?: number | null;
	imc?: number | null;
	percentualGordura?: number | null;
	massaGordura?: number | null;
	massaMagra?: number | null;
	massaMuscularEsqueletica?: number | null;
	massaOssea?: number | null;
	aguaCorporal?: number | null;
	data: Date;
	obs?: string | null;
};

export type CreateDesafioInscricaoInput = {
	aluno: string;
	nascimento: Date;
	whatsapp: string;
	objetivos: DesafioObjetivo[];
	obs?: string;
};

export async function createDesafioInscricao(input: CreateDesafioInscricaoInput) {
	const { aluno, nascimento, whatsapp, objetivos, obs } = input;
	return prisma.desafio.create({
		data: {
			aluno,
			nascimento,
			whatsapp,
			objetivo: objetivos,
			obs: obs || "",
			medidas: [],
		},
	});
}

// ============ PAGINAÇÃO ============
const PAGE_SIZE = 20;

export type ListDesafioInscricoesFilters = {
	q?: string;
	objetivo?: DesafioObjetivo | "";
	page?: number;
};

export type PaginatedResult<T> = {
	items: T[];
	total: number;
	page: number;
	pageSize: number;
	totalPages: number;
};

export async function listDesafioInscricoes(
	filters: ListDesafioInscricoesFilters
): Promise<PaginatedResult<Prisma.desafioGetPayload<{}>>> {
	const q = filters.q?.trim();
	const objetivo = filters.objetivo?.trim() as DesafioObjetivo | "";
	const page = Math.max(1, filters.page || 1);

	const where: Prisma.desafioWhereInput = {};
	if (q) {
		where.OR = [
			{ aluno: { contains: q, mode: "insensitive" } },
			{ whatsapp: { contains: q, mode: "insensitive" } },
		];
	}
	if (objetivo) {
		where.objetivo = { has: objetivo };
	}

	const [items, total] = await Promise.all([
		prisma.desafio.findMany({
			where,
			orderBy: { aluno: "asc" },
			skip: (page - 1) * PAGE_SIZE,
			take: PAGE_SIZE,
		}),
		prisma.desafio.count({ where }),
	]);

	return {
		items,
		total,
		page,
		pageSize: PAGE_SIZE,
		totalPages: Math.ceil(total / PAGE_SIZE),
	};
}

// ============ BUSCA POR ID ============
export async function getDesafioById(id: string) {
	return prisma.desafio.findUnique({ where: { id } });
}

// ============ MEDIDAS ============
export type AddMedidaInput = {
	desafioId: string;
	peso?: number;
	altura?: number;
	percentualGordura?: number;
	massaGordura?: number;
	massaMagra?: number;
	massaMuscularEsqueletica?: number;
	massaOssea?: number;
	aguaCorporal?: number;
	obs?: string;
};

function calcularIMC(peso?: number, altura?: number): number | null {
	if (!peso || !altura || altura === 0) return null;
	// altura em cm → metros
	const alturaM = altura / 100;
	return Math.round((peso / (alturaM * alturaM)) * 10) / 10;
}

export async function addMedida(input: AddMedidaInput) {
	const {
		desafioId,
		peso,
		altura,
		percentualGordura,
		massaGordura,
		massaMagra,
		massaMuscularEsqueletica,
		massaOssea,
		aguaCorporal,
		obs,
	} = input;
	const imc = calcularIMC(peso, altura);

	const novaMedida: Medida = {
		peso: peso ?? null,
		altura: altura ?? null,
		imc,
		percentualGordura: percentualGordura ?? null,
		massaGordura: massaGordura ?? null,
		massaMagra: massaMagra ?? null,
		massaMuscularEsqueletica: massaMuscularEsqueletica ?? null,
		massaOssea: massaOssea ?? null,
		aguaCorporal: aguaCorporal ?? null,
		data: new Date(),
		obs: obs ?? null,
	};

	return prisma.desafio.update({
		where: { id: desafioId },
		data: {
			medidas: {
				push: novaMedida,
			},
		},
	});
}

export type UpdateMedidaInput = {
	desafioId: string;
	medidaIndex: number;
	peso?: number;
	altura?: number;
	percentualGordura?: number;
	massaGordura?: number;
	massaMagra?: number;
	massaMuscularEsqueletica?: number;
	massaOssea?: number;
	aguaCorporal?: number;
	obs?: string;
	data?: Date;
};

export async function updateMedida(input: UpdateMedidaInput) {
	const {
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
		obs,
		data,
	} = input;

	const desafio = await prisma.desafio.findUnique({ where: { id: desafioId } });
	if (!desafio) throw new Error("Desafio não encontrado");

	const medidas = [...desafio.medidas];
	if (medidaIndex < 0 || medidaIndex >= medidas.length) {
		throw new Error("Medida não encontrada");
	}

	const medidaAtual = medidas[medidaIndex];
	const novoPeso = peso ?? medidaAtual.peso ?? undefined;
	const novaAltura = altura ?? medidaAtual.altura ?? undefined;
	const imc = calcularIMC(novoPeso, novaAltura);

	const medidaAtualizada: Medida = {
		peso: novoPeso ?? null,
		altura: novaAltura ?? null,
		imc,
		percentualGordura:
			percentualGordura !== undefined
				? percentualGordura ?? null
				: (medidaAtual as any).percentualGordura ?? null,
		massaGordura:
			massaGordura !== undefined
				? massaGordura ?? null
				: (medidaAtual as any).massaGordura ?? null,
		massaMagra:
			massaMagra !== undefined ? massaMagra ?? null : (medidaAtual as any).massaMagra ?? null,
		massaMuscularEsqueletica:
			massaMuscularEsqueletica !== undefined
				? massaMuscularEsqueletica ?? null
				: (medidaAtual as any).massaMuscularEsqueletica ?? null,
		massaOssea:
			massaOssea !== undefined
				? massaOssea ?? null
				: (medidaAtual as any).massaOssea ?? null,
		aguaCorporal:
			aguaCorporal !== undefined
				? aguaCorporal ?? null
				: (medidaAtual as any).aguaCorporal ?? null,
		data: data ?? medidaAtual.data,
		obs: obs !== undefined ? obs : medidaAtual.obs,
	};

	medidas[medidaIndex] = medidaAtualizada as any;

	return prisma.desafio.update({
		where: { id: desafioId },
		data: { medidas },
	});
}

export async function deleteMedida(desafioId: string, medidaIndex: number) {
	const desafio = await prisma.desafio.findUnique({ where: { id: desafioId } });
	if (!desafio) throw new Error("Desafio não encontrado");

	const medidas = desafio.medidas.filter((_, i) => i !== medidaIndex);

	return prisma.desafio.update({
		where: { id: desafioId },
		data: { medidas },
	});
}

// ============ ATUALIZAR PARTICIPANTE ============
export type UpdateParticipanteInput = {
	desafioId: string;
	aluno?: string;
	nascimento?: Date;
	whatsapp?: string;
	objetivos?: DesafioObjetivo[];
	obs?: string;
};

export async function updateParticipante(input: UpdateParticipanteInput) {
	const { desafioId, aluno, nascimento, whatsapp, objetivos, obs } = input;

	const updateData: any = {};
	if (aluno !== undefined) updateData.aluno = aluno.trim() || null;
	if (nascimento !== undefined) updateData.nascimento = nascimento;
	if (whatsapp !== undefined) updateData.whatsapp = whatsapp.trim() || null;
	if (objetivos !== undefined) updateData.objetivo = objetivos;
	if (obs !== undefined) updateData.obs = obs.trim() || "";

	return prisma.desafio.update({
		where: { id: desafioId },
		data: updateData,
	});
}


