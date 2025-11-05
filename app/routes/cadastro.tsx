import { z } from "zod";
import { makeDomainFunction } from "domain-functions";
import { performMutation } from "remix-forms";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { updateTreino } from "~/utils/treinos.server";
import { Outlet, useNavigation } from "@remix-run/react";
import { Form } from "~/form";

const schema = z.object({
	grupo: z
		.string()
		.min(4, { message: "Descrição do grupo com no mínimo 4 caracteres" }),
	semana: z.number().min(1, { message: "Informe o número da Semana" }),
	nome: z
		.string()
		.min(1, { message: "Informe o nome do exercício" })
		.toUpperCase(),
	repeticoes: z.string().min(1, { message: "Repetições do exercício" }),
	carga: z.string().min(1, { message: "Informe as cargas do exercício " }),
	obs: z.string(),
	video: z.string(),
});
const mutation = makeDomainFunction(schema)(async (values) => {
	const treinos = await updateTreino(values);
	return treinos;
});

export const action: ActionFunction = async ({ request }) => {
	const result = await performMutation({ request, schema, mutation });
	if (!result.success) return json(result, 400);

	// return json({ customName: result.data.id });

	return redirect(`/cadastro/${result.data.id}`);
};

export default function Cadastro() {
	let transition = useNavigation();

	// let adicionando = transition.state === "submitting";
	// useEffect(() => {
	//   if (!adicionando) {
	//     console.log("limpando");
	//   }
	// }, [adicionando]);

	return (
		<div className='w-full bg-stone-100 font-Roboto '>
			<div className='h-full mt-6 items-center flex flex-col gap-y-4'>
				<h2 className='text-2xl font-extrabold text-slate-700'>
					Cadastro de Exercício
				</h2>
				<div className='block p-6 rounded-lg shadow-lg bg-white w-3/4 '>
					<Form schema={schema}>
						{({ Field, Errors, Button, register }) => (
							<div className='grid grid-cols-2 gap-4'>
								<Field name='grupo' label='Grupo'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group '>
												<Label
													htmlFor='grupo'
													className='form-label font-light inline-block  text-gray-400'>
													Grupo
												</Label>

												<select
													// type="email"
													{...register("grupo")}
													className='rounded-md border-2 form-control block
                          w-full '>
													<option value='PEITORAL'>PEITORAL</option>
													<option value='OMBROS'>OMBROS</option>
													<option value='MEMBROS SUPERIORES 1'>
														MEMBROS SUPERIORES 1
													</option>
													<option value='COSTAS'>COSTAS</option>
													<option value='MEMBROS SUPERIORES 2'>
														MEMBROS SUPERIORES 2
													</option>
													<option value='BICEPS'>BICEPS</option>
													<option value='TRICEPS'>TRICEPS</option>
													<option value='QUADS'>QUADS</option>
													<option value='POSTERIORES DE COXAS'>
														POSTERIORES DE COXAS
													</option>
													<option value='GLUTEOS'>GLUTEOS</option>
													<option value='PANTURRILHA'>PANTURRILHA</option>
													<option value='ABDOME'>ABDOME</option>
													<option value='MEMBROS INFERIORES GERAL'>
														MEMBROS INFERIORES GERAL
													</option>
													<option value='MEMBROS SUPERIORES GERAL'>
														MEMBROS SUPERIORES GERAL
													</option>
													<option value='INICIANTE 1'>INICIANTE 1</option>
													<option value='INICIANTE 2'>INICIANTE 2</option>
													<option value='INICIANTE 3'>INICIANTE 3</option>
													<option value='INICIANTE 4'>INICIANTE 4</option>
												</select>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='semana' label='Semana'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group'>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<select
													// type="number"
													{...register("semana")}
													className='rounded-md border-2 form-control block
                          w-full '>
													<option value='511'>treino 1 </option>
													<option value='512'>treino 2</option>
													<option value='513'>treino 3</option>
													<option value='514'>treino 4</option>
													<option value='515'>treino 5</option>
													<option value='516'>treino 6</option>
													<option value='417'>Melhor de Todas</option>
													<option value='418'>Melhor de Todas 2</option>
													<option value='401'>Iniciante 1</option>
													<option value='402'>Iniciante 2</option>
													<option value='403'>Iniciante 3</option>
													<option value='404'>Iniciante 4</option>
												</select>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='nome' label='Exercicio'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group'>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<input
													type='text'
													{...register("nome")}
													className='rounded-md border-2 form-control block
                          w-full '
												/>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='repeticoes' label='Repetições'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group '>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<input
													type='text'
													{...register("repeticoes")}
													className='rounded-md border-2 form-control block
                          w-full '
												/>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='carga' label='Carga'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group '>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<input
													type='text'
													{...register("carga")}
													className='rounded-md border-2 form-control block
                          w-full '
												/>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='obs' label='Observação'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group '>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<input
													type='text'
													{...register("obs")}
													className='rounded-md border-2 form-control block
                          w-full '
												/>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Field name='video' label='Video'>
									{({ Label, Errors }) => (
										<>
											<div className='form-group'>
												<Label className='form-label font-light inline-block  text-gray-400' />
												<select
													// type="number"
													{...register("video")}
													className='rounded-md border-2 form-control block
                          w-full '>
													<option value=''>Selecione a máquina</option>
													<option value='abd_declinado.gif'>
														Abdominal Declinado
													</option>
													<option value='abd_maquina.gif'>
														Abdominal Máquina
													</option>
													<option value='agachamento.gif'>Agachamento</option>
													<option value='apoio.gif'>Apoio</option>
													<option value='apoio_pe_banco.gif'>
														Apoio Pé no banco
													</option>
													<option value='barra_graviton.gif'>
														Barra no Graviton
													</option>
													<option value='cadeira_extensora.gif'>
														Cadeira Extensora
													</option>
													<option value='crucifixo_reto_alteres.gif'>
														Crucifixo reto com halteres
													</option>
													<option value='desenvolvimento_militar_sentado.gif'>
														Crucifixo Cross Over
													</option>
													<option value='crucifixo_halteres.gif'>
														Crucifixo com Halteres
													</option>
													<option value='crucifixo_invertido_maquina.gif'>
														Crucifixo Invertido Máquina
													</option>
													<option value='crucifixo_cross_over.gif'>
														Desenvolvimento Militar Sentado
													</option>
													<option value='desenvolvimento_halteres.gif'>
														Desenvolvimento com Halteres
													</option>
													<option value='desenvolvimento_maquina.gif'>
														Desenvolvimento Máquina
													</option>
													<option value='elevacao_lateral_curvado.gif'>
														Elevação Lateral Curvado
													</option>
													<option value='elevacao_frontal_alternado_sentado.gif'>
														Elevação Frontal Alternado Sentado
													</option>
													<option value='elevacao_lateral.gif'>
														Elevação Lateral
													</option>
													<option value='flying_reto_alternado.gif'>
														Flying Reto Alternado
													</option>
													<option value='levantamento_terra.gif'>
														Levantamento Terra
													</option>
													<option value='leg_45.gif'>Leg 45º</option>
													<option value='leg_horizontal.gif'>
														Leg Horizontal
													</option>
													<option value='martelo_alternado.gif'>
														Martelo Alternado
													</option>
													<option value='paralela_maquina.gif'>
														Paralela Máquina
													</option>
													<option value='pulldown_articulado.gif'>
														Pull Down Articulado
													</option>
													<option value='pulldown_barra.gif'>
														Pull Down com Barra
													</option>
													<option value='puxador_frente.gif'>
														Puxador Frente
													</option>
													<option value='remada_alta_barra.gif'>
														Remada Alta com Barra{" "}
													</option>
													<option value='remada_sentada_triangulo.gif'>
														Remada Sentada com Triangulo
													</option>
													<option value='rosca_direta_w.gif'>
														Rosca Direta Barra 'W'
													</option>
													<option value='rosca_testa_halteres.gif'>
														Rosca Testa Halteres
													</option>

													<option value='rosca_francesa_halteres.gif'>
														Rosca Francesa Halteres
													</option>
													<option value='rosca_testa_barra.gif'>
														Rosca Testa com Barra
													</option>

													<option value='supino_maquina.gif'>
														Supino Máquina
													</option>
													<option value='supino_inclinado.gif'>
														Supino Inclinado
													</option>
													<option value='supino_reto.gif'>Supino Reto</option>
													<option value='triceps_pulley_barra.gif'>
														Triceps Pulley com Barra
													</option>
													<option value='triceps_pulley_corda.gif'>
														Triceps Pulley com Corda
													</option>
													<option value='triceps_pulley_unilateral.gif'>
														Triceps Pulley Unilateral
													</option>
												</select>
												<Errors className='text-red-500' />
											</div>
										</>
									)}
								</Field>
								<Errors />

								<Button
									type='submit'
									className='rounded-xl w-32 bg-green-600 px-3 py-2 text-white font-semibold hover:bg-green-800'>
									{transition.state === "submitting"
										? "Cadastrando..."
										: "Cadastrar"}
								</Button>
								{/* <Button
                  type="submit"
                  className="rounded-xl w-32 bg-blue-600  px-3 py-2 text-white font-semibold hover:bg-blue-800"
                >
                  Pesquisar
                </Button> */}
							</div>
						)}
					</Form>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
