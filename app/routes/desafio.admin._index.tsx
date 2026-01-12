import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData, useSearchParams } from "@remix-run/react";
import {
	listDesafioInscricoes,
	DESAFIO_OBJETIVOS,
} from "~/utils/desafio.server";
import { Input } from "@/components/ui/input";
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

function formatObjetivoLabel(o: string) {
	if (o === "Melhorar saude") return "Melhorar saúde";
	return o;
}

function parseObjetivoParam(value: string) {
	return DESAFIO_OBJETIVOS.includes(value as any) ? (value as any) : "";
}

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const q = url.searchParams.get("q") || "";
	const objetivo = parseObjetivoParam(url.searchParams.get("objetivo") || "");
	const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));

	const result = await listDesafioInscricoes({ q, objetivo, page });
	return json({ ...result, q, objetivo });
};

export default function DesafioAdminIndex() {
	const { items, total, page, totalPages, q, objetivo } =
		useLoaderData<typeof loader>();
	const [searchParams] = useSearchParams();

	function buildPageUrl(newPage: number) {
		const params = new URLSearchParams(searchParams);
		params.set("page", String(newPage));
		return `?${params.toString()}`;
	}

	return (
		<div className='md:container w-[97%] mx-auto mt-2'>
			<div className='bg-white/40 rounded-xl shadow-sm p-4 md:p-6'>
				<h1 className='text-stone-900 text-2xl md:text-3xl font-bold'>
					Inscrições do Desafio
				</h1>

				<Form
					method='get'
					className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-3'>
					<div className='md:col-span-2'>
						<label className='block text-sm text-stone-700 mb-1'>
							Buscar (nome ou WhatsApp)
						</label>
						<Input
							name='q'
							defaultValue={q}
							placeholder='Ex.: Maria / 6199...'
						/>
					</div>
					<div>
						<label className='block text-sm text-stone-700 mb-1'>
							Objetivo
						</label>
						<select
							name='objetivo'
							defaultValue={objetivo}
							className='flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
							<option value=''>Todos</option>
							{OBJETIVOS_CLIENTE.map((o) => (
								<option key={o} value={o}>
									{formatObjetivoLabel(o)}
								</option>
							))}
						</select>
					</div>
					<div className='md:col-span-3'>
						<Button className='shadow shadow-stone-400/75 bg-orange-400 text-white rounded-xl'>
							Filtrar
						</Button>
					</div>
				</Form>

				<div className='mt-4 flex items-center justify-between text-sm text-stone-600'>
					<span>
						{total} inscrição(ões) encontrada(s)
						{totalPages > 1 && ` — Página ${page} de ${totalPages}`}
					</span>
				</div>

				<div className='mt-4 overflow-auto rounded-lg'>
					<table className='w-full text-sm'>
						<thead>
							<tr className='text-left text-stone-700'>
								<th className='py-3 px-3 font-semibold'>Nome</th>
								<th className='py-3 px-3 font-semibold'>Objetivos</th>
								<th className='py-3 px-3 font-semibold text-center'>Medidas</th>
								<th className='py-3 px-3 font-semibold text-center'>Ações</th>
							</tr>
						</thead>
						<tbody>
							{items.map((i: any) => (
								<tr key={i.id} className='border-t border-stone-200/60'>
									<td className='py-3 px-3 text-stone-900 font-medium'>
										{i.aluno || "-"}
									</td>
									<td className='py-3 px-3 text-stone-800'>
										{Array.isArray(i.objetivo) && i.objetivo.length > 0 ? (
											<div className='flex flex-wrap gap-1'>
												{i.objetivo.slice(0, 2).map((o: string) => (
													<span
														key={o}
														className='inline-block px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs'>
														{formatObjetivoLabel(o)}
													</span>
												))}
												{i.objetivo.length > 2 && (
													<span className='inline-block px-2 py-0.5 bg-stone-100 text-stone-600 rounded text-xs'>
														+{i.objetivo.length - 2}
													</span>
												)}
											</div>
										) : (
											<span className='text-stone-400'>-</span>
										)}
									</td>
									<td className='py-3 px-3 text-center text-stone-800'>
										<span className='inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-xs'>
											{i.medidas?.length || 0}
										</span>
									</td>
									<td className='py-3 px-3 text-center'>
										<Link
											to={`/desafio/admin/${i.id}`}
											className='text-orange-600 hover:text-orange-700 hover:underline font-medium'>
											📊 Medidas
										</Link>
									</td>
								</tr>
							))}
							{items.length === 0 && (
								<tr>
									<td colSpan={4} className='py-8 text-center text-stone-600'>
										Nenhuma inscrição encontrada.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{totalPages > 1 && (
					<div className='mt-4 flex items-center justify-center gap-2'>
						{page > 1 && (
							<Link
								to={buildPageUrl(page - 1)}
								className='px-3 py-1 rounded bg-stone-200 text-stone-700 hover:bg-stone-300'>
								← Anterior
							</Link>
						)}
						{Array.from({ length: totalPages }, (_, idx) => idx + 1)
							.filter(
								(p) =>
									p === 1 ||
									p === totalPages ||
									(p >= page - 2 && p <= page + 2)
							)
							.map((p, idx, arr) => {
								const prev = arr[idx - 1];
								const showEllipsis = prev && p - prev > 1;
								return (
									<span key={p} className='flex items-center gap-1'>
										{showEllipsis && (
											<span className='px-1 text-stone-400'>…</span>
										)}
										<Link
											to={buildPageUrl(p)}
											className={`px-3 py-1 rounded ${
												p === page
													? "bg-orange-400 text-white"
													: "bg-stone-200 text-stone-700 hover:bg-stone-300"
											}`}>
											{p}
										</Link>
									</span>
								);
							})}
						{page < totalPages && (
							<Link
								to={buildPageUrl(page + 1)}
								className='px-3 py-1 rounded bg-stone-200 text-stone-700 hover:bg-stone-300'>
								Próxima →
							</Link>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
